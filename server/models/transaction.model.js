const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },

    transactionName: {
        type: String,
        required: [true, "transactionName is required"],
    },

    transactionAmount: {
        type: Number,
        required: [true, "transactionAmount is required"]    },

    categoryName: {
        type: String,
        required: [true, "categoryName is required"]
    }
});

module.exports = mongoose.model("Transaction", TransactionSchema);
