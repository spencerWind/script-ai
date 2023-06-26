const UserController = require("../controllers/user.controller")

module.exports = (app) => {
        app.get("/api/user", UserController.getAllUsers);
        app.post("/api/user", UserController.createUser);
        app.get("/api/user/:id", UserController.getOneUser);
        app.patch("/api/user/:id", UserController.updateUser);
        app.delete("/api/user/:id", UserController.deleteUser);
}