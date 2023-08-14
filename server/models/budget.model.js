const mongoose = require("mongoose");

const BudgetSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: [true, "userId is required"],
    },
    
});
