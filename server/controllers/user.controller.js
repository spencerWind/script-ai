const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const secret = process.env.SECRET_KEY_DEV;

module.exports.createUser = (req, res) => {
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
                userid: userId
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

module.exports.getOneUser = (req, res) => {
    User.findOne({ _id: req.params.id })
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
    const user = await User.findOne({ email: req.body.email });

    if (user === null) {
        return res.sendStatus(404);
    }

    const correctPassword = await bcrypt.compare(
        req.body.password,
        user.password
    );

    if (!correctPassword) {
        return res.sendStatus(400);
    }

    const userToken = jwt.sign(
        {
            id: user._id,
        },
        process.env.SECRET_KEY_DEV
    );

    res.cookie("userToken", userToken, { httpOnly: true }).json({
        msg: "success!",
    });
};

module.exports.logoutUser = (req, res) => {
    res.clearCookie("userToken");
    res.sendStatus(200);
};
