const TransactionController = require("../controllers/Transaction.controller");

module.exports = (app) => {
    // Get Transactions
    app.get("/api/transaction/fetch", TransactionController.getTransactions);

    // Create transaction
    app.post(
        "/api/transaction/create",
        TransactionController.createTransaction
    );

    // Update savingsGoal
    app.patch(
        "/api/transaction/update",
        TransactionController.updateTransaction
    );

    //Delete Savings Goal
    app.delete(
        "/api/transaction/delete",
        TransactionController.deleteTransaction
    );
};
