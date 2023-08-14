const mongoose = require("mongoose");

const SavingsGoalSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    goalName: {
        type: String,
        required: true,
    },
    targetAmount: {
        type: Number,
        required: true,
    },
    currentAmount: {
        type: Number,
        default: 0,
    },
    deadline: {
        type: Date,
    },
    completed: {
        type: Boolean,
        default: false,
    },
    pinned: {
        type: Boolean,
        default: false,
    }
}, {timestamps: true});

module.exports = mongoose.model("SavingsGoal", SavingsGoalSchema);
