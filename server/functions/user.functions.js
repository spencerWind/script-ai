const User = require("../models/user.model");

const findUserById = async (userId) => {
    try {
        const user = await User.findById(userId);
        if (user) {
            return user;
        } else {
            return null;
        }
    } catch (error) {
        console.error("Error finding user by ID:", error);
        return null;
    }
};

module.exports = { findUserById };
