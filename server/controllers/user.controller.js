const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const secret = process.env.SECRET_KEY_DEV;
const bcrypt = require("bcrypt");



// create web token
const createToken = (_id) => {
    return jwt.sign({ userId: _id }, secret, { expiresIn: "1h" });
};

// create user
module.exports.createUser = async (req, res) => {
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
        return res.status(400).json({ error: "That user already exists" });
    }

    User.create(req.body)
        .then((user) => {
            const userToken = createToken(user._id);
            res.status(200).json({ user: user, userToken });
        })
        .catch((err) => {
            res.json(err);
        });
};

// Retrieve User
module.exports.getAllUsers = (req, res) => {
    User.find({})
        .then((users) => {
            console.log(users);
            res.json(users);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        });
};

// Update user
module.exports.updateUser = (req, res) => {
    User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then((updatedUser) => {
            console.log(updatedUser);
            res.json(updatedUser);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        });
};

// Delete User
module.exports.deleteUser = (req, res) => {
    User.deleteOne({ _id: req.params.id })
        .then((res) => {
            console.log(res);
            res.json(res);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        });
};

// Log In User
module.exports.loginUser = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    if (!email || !password) {
        return res.status(400).json({ error: "All fields must be filled..." });
    }

    try {
        const existingUser = await User.findOne({ email: req.body.email });
        if (!existingUser) {
            return res.status(404).json({ error: "Email not in use..." });
        }

        const match = await bcrypt.compare(password, existingUser.password);

        if (match === false) {
            return res
                .status(401)
                .json({ error: "Password does not match..." });
        }

        const userToken = createToken(existingUser._id);
        res.status(200).json({ user: existingUser, userToken });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: "An unexpected error occurred. Please try again later.",
        });
    }
};

// Log Out User
module.exports.logoutUser = (req, res) => {
    res.clearCookie("userToken");
    res.sendStatus(200);
};
