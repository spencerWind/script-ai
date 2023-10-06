const Budget = require("../models/budget.model.js");

// server functions
const { findUserById } = require("../functions/user.functions");

// Create budget
module.exports.createBudget = async (req, res) => {
    const { user } = req.body;

    const exists = await findUserById(user);
    if (!exists) {
        return res.status(404).json({ message: "User not found" });
    }

    Budget.create(req.body)
        .then((budget) => {
            res.status(200).json({
                message: "Budget successfully created",
                budget: budget,
            });
        })
        .catch((err) => {
            console.log("Error: ", err.message);
            res.json(err);
        });
};

// Retrieve Budget's
module.exports.getBudgets = async (req, res) => {
    const { user } = req.query;

    const exists = await findUserById(user);
    if (!exists) {
        return res.status(404).json({ message: "User not found" });
    }

    Budget.find({ user })
        .then((budgets) => {
            console.log("Budget's found", budgets);
            res.json(budgets);
        })
        .catch((err) => {
            console.log("Error: ", err.message);
            res.json(err);
        });
};

// Update budget
module.exports.updateBudget = async (req, res) => {
    const { user } = req.body;

    const exists = await findUserById(user);
    if (!exists) {
        return res.status(404).json({ message: "User not found" });
    }

    Budget.findOneAndUpdate({ _id: req.body._id }, req.body, {
        new: true,
    })
        .then((updatedBudget) => {
            console.log("Budget updated: ", updatedBudget);
            res.status(200).json({
                message: "Budget updated",
                budget: updatedBudget,
            });
        })
        .catch((err) => {
            console.log("Error updating budget:", err);
            res.json(err);
        });
};

// Delete Budget
module.exports.deleteBudget = async (req, res) => {
    const { user, _id } = req.query;

    const exists = await findUserById(user);
    if (!exists) {
        return res.status(404).json({ message: "User not found" });
    }

    Budget.findOneAndDelete({ _id })
        .then((deletedBudget) => {
            console.log("Successfully deleted budget");
            res.json({
                message: "sucessfully deleted budget",
                deletedBudget: deletedBudget,
            });
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        });
};
