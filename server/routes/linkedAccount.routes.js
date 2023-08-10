const { authenticate } = require("../config/jwt.config");
const linkedAccountController = require("../controllers/linkedAccount.controller");

module.exports = (app) => {
    app.get("/api/account", linkedAccountController.getAllAccounts);

    app.post("/api/account/link", linkedAccountController.linkAccount);
};
