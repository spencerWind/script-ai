const User = require("../models/user.model");

module.exports.createUser = (req, res) => {
    User.create(req.body)
        .then((user) => {
            console.log(user);
            res.json(user);
        })
        .catch((err) => {
            console.log(err);
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