const mongoose = require("mongoose");

const linkedAccountSchema = new mongoose.Schema({
    accountType: {
        type: String,
        required: true,
    },
    accountId: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
});

module.exports = linkedAccountSchema;
