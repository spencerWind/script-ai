const SavingsGoal = require("../models/SavingsGoal.model");

// server functions
const { findUserById } = require("../functions/user.functions");

// Create savingsGoal
module.exports.createSavingsGoal = async (req, res) => {
    const { user } = req.body;

    const exists = await findUserById(user);
    if (!exists) {
        return res.status(404).json({ message: "User not found" });
    }

    SavingsGoal.create(req.body)
        .then((savingsGoal) => {
            res.status(200).json({
                message: "Savings goal successfully created",
                savingsGoal: savingsGoal,
            });
        })
        .catch((err) => {
            console.log("Error", err.message);
            res.json(err);
        });
};

// Retrieve savingsGoal's
module.exports.getSavingsGoals = async (req, res) => {
    const { userId } = req.query;

    const exists = await findUserById(userId);
    if (!exists) {
        return res.status(404).json({ message: "User not found" });
    }

    SavingsGoal.find({ user: userId })
        .then((savingsGoals) => {
            console.log("Savings goals Found", savingsGoals);
            res.json(savingsGoals);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        });
};

// Update savingsGoal
module.exports.updateSavingsGoal = async (req, res) => {
    const { user } = req.body;

    const exists = await findUserById(user);
    if (!exists) {
        return res.status(404).json({ message: "User not found" });
    }

    SavingsGoal.findOneAndUpdate({ _id: req.body._id }, req.body, {
        new: true,
    })
        .then((updatedSavingsGoal) => {
            console.log("Savings goal updated:", updatedSavingsGoal);
            res.status(200).json({
                message: "Savings goal updated",
                savingsGoal: updatedSavingsGoal,
            });
        })
        .catch((err) => {
            console.log("Error updating savings goal:", err);
            res.json({ Error: err.message });
        });
};

// Delete savingsGoal
module.exports.deleteSavingsGoal = async (req, res) => {
    const { user, _id } = req.query;

    const exists = await findUserById(user);
    if (!exists) {
        return res.status(404).json({ message: "User not found" });
    }

    SavingsGoal.findOneAndDelete({ _id })
        .then((deletedGoal) => {
            console.log("Successfully deleted savings goal");
            res.json({
                message: "sucessfully deleted savings goal",
                deletedGoal: deletedGoal,
            });
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        });
};
