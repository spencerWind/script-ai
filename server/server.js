const express = require("express");
const cors = require("cors");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const app = express();

app.use(cookieParser());
app.use(
    cors({
        credentials: true,
        origin: ["http://localhost:5173", "https://localhost:5173"],
    })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./config/mongoose.config");
require("./routes/user.routes")(app);
require("./routes/plaid.routes")(app);

app.listen(8000, () => console.log(`Listening on port 8000`));
