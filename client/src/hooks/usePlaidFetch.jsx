import { useEffect, useState } from "react";
import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext";

export const usePlaidFetch = () => {
    const [linkToken, setLinkToken] = useState("");
    const { user } = useAuthContext();
    const [publicToken, setPublicToken] = useState("");

    axios.defaults.baseURL = "http://localhost:8000";

    useEffect(() => {
        createLinkToken();
    }, []);

    async function linkAccount(publicToken) {
        let access_token = await axios.post(
            "/api/plaid/exchange_public_token",
            {
                public_token: publicToken,
            }
        );
        console.log("Success", access_token.data);
        const auth = await axios.post("/api/plaid/auth", {
            access_token: access_token.data.accessToken,
        });
        console.log(auth.data);

        auth.data.accounts.map((account) => {
            console.log(account);
            const accountType = account.name;
            const accessToken = access_token.data.accessToken;
            const accountId = account.acount_id;

            linkAccount(accountType, accessToken, accountId);
        });
    }

    async function createLinkToken() {
        axios
            .post("/api/plaid/create_link_token", {
                client_user_id: user._id,
            })
            .then((res) => {
                console.log("successfully created token");
                console.log(res.data.link_token);
                setLinkToken(res.data.link_token);
            })
            .catch((err) => {
                console.log("Create Link Error", err);
            });
    }

    async function saveAccount(accountType, accessToken, accountId) {
        const userId = user._id;

        axios
            .post("/api/account/link", {
                accountType,
                accessToken,
                accountId,
                userId,
            })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log("Link Account Error:", err);
            });
    }

    return {
        publicToken,
        setPublicToken,
        createLinkToken,
        linkToken,
    };
};
