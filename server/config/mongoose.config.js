const mongoose = require("mongoose");
const dataBase = "scriptfinance";

mongoose
    .connect(`mongodb://127.0.0.1:27017/${dataBase}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Established a connection to the database");
    })
    .catch((err) => {
        console.log(
            "Somewthing went wrong when trying to connect to the database"
        );
        console.log("Error:", err);
    });
