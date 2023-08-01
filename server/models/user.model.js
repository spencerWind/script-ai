const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

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
            unique: true,
            validate: {
                validator: (val) => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
                message: "Please enter a valid email",
            },
        },
        password: {
            type: String,
            required: [true, "User password is required"],
            minlength: [8, "Password must be 8 characters or longer"],
        },
        darkMode: {
            type: Boolean,
            required: [true, "Dark mode preference is required"],
        },
    },
    { timestamps: true }
);

UserSchema.virtual("confirmPassword")
    .get(() => this.confirmPassword)
    .set((value) => (this.confirmPassword = value));

UserSchema.pre("validate", function (next) {
    if (this.password !== this.confirmPassword) {
        this.invalidate("confirmPassword", "Passwords must match");
    }
    next();
});

UserSchema.pre("save", function (next) {
    bcrypt.hash(this.password, 10).then((hash) => {
        this.password = hash;
        next();
    });
});

module.exports = mongoose.model("User", UserSchema);
