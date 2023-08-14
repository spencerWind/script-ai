import { useEffect, useState } from "react";
import { usePlaidFetch } from "../hooks/usePlaidFetch";
import { usePlaidLink } from "react-plaid-link";

const PlaidLink = () => {
    const [linkToken, setLinkToken] = useState("");
    const { linkAccount, createLinkToken } = usePlaidFetch();

    useEffect(() => {
        function generateLinkToken() {
            try {
                const token = createLinkToken();
                console.log("Token: ", token);
                setLinkToken(token);
            } catch (err) {
                console.log(err);
            }
        }

        generateLinkToken();
    }, []);

    const { open, ready } = usePlaidLink({
        token: linkToken,
        onSuccess: (public_token, metadata) => {
            console.log("success");
        },
    });

    return (
        <button
            onClick={() => {
                console.log(linkToken);
                open();
            }}
            disabled={!ready}
            className="font-medium text-slate-100 bg-purple-600 px-2 py-1 rounded">
            Link Account
        </button>
    );
};

export default PlaidLink;
