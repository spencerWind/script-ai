const { Configuration, PlaidApi, PlaidEnvironments } = require("plaid");

const configuration = new Configuration({
    basePath: PlaidEnvironments.sandbox,
    baseOptions: {
        headers: {
            "PLAID-CLIENT-ID": process.env.PLAID_CLIENT_ID,
            "PLAID-SECRET": process.env.PLAID_SECRET_KEY,
        },
    },
});

const plaidClient = new PlaidApi(configuration);

module.exports = (app) => {
    app.get("/api/plaid/hello", (req, res) => {
        res.json({ message: "hello plaid" });
    });

    app.post("/api/plaid/create_link_token", async function (req, res) {
        const plaidRequest = {
            user: {
                client_user_id: "user",
            },
            client_name: "Script Finance",
            products: ["auth"],
            language: "en",
            redirect_uri: "http://localhost:5173/",
            country_codes: ["US"],
        };
        try {
            const createTokenResponse = await plaidClient.linkTokenCreate(
                plaidRequest
            );
            res.json(createTokenResponse.data);
        } catch (error) {
            res.status(500).send("failure");
        }
    });

    app.post(
        "/api/plaid/exchange_public_token",
        async function (req, res, next) {
            const publicToken = req.body.public_token;
            try {
                const plaidResponse = await plaidClient.itemPublicTokenExchange(
                    {
                        public_token: publicToken,
                    }
                );
                // These values should be saved to a persistent database and
                // associated with the currently signed-in user
                const accessToken = plaidResponse.data.access_token;
                res.json({ accessToken });
            } catch (err) {
                res.status(500).json({ err });
            }
        }
    );

    app.post("/api/plaid/auth", async function (req, res) {
        try {
            const accessToken = req.body.access_token;
            const plaidRequest = {
                access_token: accessToken,
            };
            const plaidResponse = await plaidClient.authGet(plaidRequest);
            res.json(plaidResponse.data);
        } catch (err) {
            res.status(500).json(err);
        }
    });
};
