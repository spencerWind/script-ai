const mongoose = require("mongoose");

const BudgetSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        categoryName: {
            type: String,
            required: [true, "categoryName is required"],
        },
        totalAmount: {
            type: Number,
            required: [true, "monthlyAmount is required"],
        },
        currentAmount: {
            type: Number,
            required: [true, "monthlyAmount is required"],
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Budget", BudgetSchema);
