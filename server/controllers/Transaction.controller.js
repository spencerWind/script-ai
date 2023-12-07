const Transaction = require("../models/transaction.model");

const { findUserById } = require("../functions/user.functions");

// Create Transaction
module.exports.createTransaction = async (req, res) => {
    const { user } = req.body;

    const exists = await findUserById(user);
    if (!exists) {
        return res.status(404).json({ message: "User not found" });
    }

    Transaction.create(req.body)
        .then((transaction) => {
            res.status(200).json({
                message: "Transaction successfully created",
                transaction: transaction,
            });
        })
        .catch((err) => {
            console.log("Error", err.message);
            res.json(err);
        });
};

// Retrieve transactions
module.exports.getTransactions = async (req, res) => {
    const { userId } = req.query;

    const exists = await findUserById(userId);
    if (!exists) {
        return res.status(404).json({ message: "User not found" });
    }

    Transaction.find({ user: userId })
        .then((transactions) => {
            console.log("Transactions Found", transactions);
            res.json(transactions);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        });
};

// Update transaction
module.exports.updateTransaction = async (req, res) => {
    const { user } = req.body;

    const exists = await findUserById(user);
    if (!exists) {
        return res.status(404).json({ message: "User not found" });
    }

        Transaction.findOneAndUpdate({ _id: req.body._id }, req.body, {
            new: true,
        })
            .then((updatedTransaction) => {
                console.log("Transaction updated:", updatedTransaction);
                res.status(200).json({
                    message: "Transaction updated",
                    transaction: updatedTransaction,
                });
            })
            .catch((err) => {
                console.log("Error updating transaction:", err);
                res.json({ Error: err.message });
            });
};

// Delete transaction
module.exports.deleteTransaction = async (req, res) => {
        const { user} = req.query;

        const exists = await findUserById(user);
        if (!exists) {
            return res.status(404).json({ message: "User not found" });
        }

            Transaction.deleteMany({ user })
                .then((deletedTransactions) => {
                    console.log("Successfully deleted transactions");
                    res.json({
                        message: "sucessfully deleted transanction",
                        deletedTransactions: deletedTransactions,
                    });
                })
                .catch((err) => {
                    console.log(err);
                    res.json(err);
                });
}
