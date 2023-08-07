const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

module.exports.requireAuth = async (req, res, next) => {
    //verify authentication
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({ error: "Authorization Token Required" });
    }

    const token = authorization.split(" ")[1];

    try {
        const { _id } = jwt.verify(token, process.env.SECRET_KEY_DEV);
        req.user = await User.findOne({ _id }).select("_id");
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({ error: "Request is not authorized" });
    }
};