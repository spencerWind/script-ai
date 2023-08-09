import { useEffect, useState } from "react";
import axios from "axios";

export const usePlaidFetch = () => {
    const [linkToken, setLinkToken] = useState("");
    const [publicToken, setPublicToken] = useState("");

    axios.defaults.baseURL = "http://localhost:8000";

    useEffect(() => {
        fetchCreateLinkToken();
    }, []);

    function PlaidAuth() {
        const [account, setAccount] = useState("");
        useEffect(() => {
            async function fetchAccessToken() {
                let accessToken = await axios.post(
                    "/api/plaid/exchange_public_token",
                    {
                        public_token: publicToken,
                    }
                );
                console.log("Success", accessToken.data);
                const auth = await axios.post("/api/plaid/auth", {
                    access_token: accessToken.data.accessToken,
                });
                console.log(auth.data);
                setAccount(auth.data.accounts[0]);
            }
            fetchAccessToken();
        }, []);

        return <span>{account && account.name}</span>;
    }

    async function fetchCreateLinkToken() {
        await axios
            .post("/api/plaid/create_link_token")
            .then((res) => {
                console.log(res);
                setLinkToken(res.data.link_token);
            })
            .catch((err) => {
                console.log("Create Link Error", err);
            });
    }

    return {
        linkToken,
        publicToken,
        setPublicToken,
        fetchCreateLinkToken,
        PlaidAuth,
    };
};
