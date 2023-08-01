const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const secret = process.env.SECRET_KEY_DEV;
const bcrypt = require("bcrypt");

module.exports.createUser = async (req, res) => {
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
        throw new Error("Email already in use");
    }

    User.create(req.body)
        .then((user) => {
            const userId = {
                id: user._id,
            };
            const userToken = jwt.sign(userId, secret, {
                expiresIn: "1h",
            });

            res.cookie("userToken", userToken, { httpOnly: true }).json({
                msg: "success",
                userid: userId,
            });
        })
        .catch((err) => {
            res.json(err);
        });
};

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

module.exports.loginUser = async (req, res) => {
    res.json({ msg: "login user" });
};

module.exports.logoutUser = (req, res) => {
    res.clearCookie("userToken");
    res.sendStatus(200);
};
