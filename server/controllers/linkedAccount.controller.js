const LinkedAccount = require("../models/linkedAccount.model");

module.exports.linkAccount = async (req, res) => {
    console.log(req.body)
    const { accountType, accessToken, accountId, userId } = req.body;
    
    const linkedAccount = {
        accountType,
        accessToken,
        accountId,
        userId,
    };

    console.log(linkedAccount)


};

module.exports.getAllAccounts = (req, res) => {
    linkedAccount
        .find({})
        .then((res) => {
            console.log(res);
            res.json(res);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        });
};
