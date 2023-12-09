const BudgetController = require("../controllers/budget.controller");

module.exports = (app) => {
    // Get Budget's
    app.get("/api/budget/fetch", BudgetController.getBudgets);

    // Create Budget
    app.post("/api/budget/create", BudgetController.createBudget);

    // Update Budget Progress
    app.patch(
        "/api/budget/update/progress",
        BudgetController.updateBudgetProgress
    );

    // Update Budget Info
    app.patch(
        "/api/budget/update/info",
        BudgetController.updateBudgetInfo
    );

    // Reset Budgets
    app.patch("/api/budget/reset", BudgetController.resetBudget);

    // Delete Budget
    app.delete("/api/budget/delete", BudgetController.deleteBudget);
};
