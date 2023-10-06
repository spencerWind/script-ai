const BudgetController = require("../controllers/budget.controller")

module.exports = (app) => {
    // Get Budget's
    app.get("/api/budget/fetch", BudgetController.getBudgets)

    // Create Budget
    app.post("/api/budget/create", BudgetController.createBudget)

    // Update Budget
    app.patch("/api/budget/update", BudgetController.updateBudget)

    // Delete Budget
    app.delete("/api/budget/delete", BudgetController.deleteBudget)
}