const SavingsGoalController = require("../controllers/SavingsGoal.controller");

module.exports = (app) => {
    // Get Savings Goal
    app.get("/api/goal/fetch", SavingsGoalController.getSavingsGoals);

    // Create savingsGoal
    app.post("/api/goal/create", SavingsGoalController.createSavingsGoal);

    // Update savingsGoal
    app.patch("/api/goal/update", SavingsGoalController.updateSavingsGoal);

    //Delete Savings Goal
    app.delete("/api/goal/delete", SavingsGoalController.deleteSavingsGoal)
};
