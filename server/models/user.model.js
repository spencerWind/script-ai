const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: [true, "User first name is required"],
        },
        lastName: {
            type: String,
            required: [true, "User last is required"],
        },
        email: {
            type: String,
            required: [true, "User email is required"],
        },
        password: {
            type: String,
            required: [true, "User password is required"],
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
