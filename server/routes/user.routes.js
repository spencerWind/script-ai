const { authenticate } = require("../config/jwt.config");
const UserController = require("../controllers/user.controller");

module.exports = (app) => {
    app.get("/api/user", UserController.getAllUsers);
    app.post("/api/user", UserController.createUser);
    app.patch("/api/user/:id", authenticate, UserController.updateUser);
    app.delete("/api/user/:id", authenticate, UserController.deleteUser);
    app.post("/api/user/login", UserController.loginUser);
    app.post("/api/user/logout", UserController.logoutUser);
};
