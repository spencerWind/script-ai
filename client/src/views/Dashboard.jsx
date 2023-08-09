/* eslint-disable react/prop-types */
import { usePlaidFetch } from "../hooks/usePlaidFetch";
import { usePlaidLink } from "react-plaid-link";

const Dashboard = () => {
    const { publicToken, linkToken, setPublicToken, PlaidAuth, account } =
        usePlaidFetch();

    const { open, ready } = usePlaidLink({
        token: linkToken,
        onSuccess: (public_token, metadata) => {
            setPublicToken(public_token);
            console.log("success", public_token, metadata);
        },
    });

    return (
        <div className="lg:grid grid-cols-3 grid-rows-4 gap-16 h-full w-full">
            <div className="col-span-2 row-span-2 glass-card p-4">
                <p>Finance Overview</p>

                <p>
                    Account: {account ? account.name : "no account found"}
                </p>
            </div>
            <div className="row-span-2 glass-card p-4">
                <p>Transactions</p>
            </div>
            <div className="col-span-2 glass-card p-4">
                <p>Budget</p>
            </div>
            <div className="row-span-2 glass-card p-4">
                <h3 className="text-sm mb-4">Quick Actions</h3>
                <div className="flex flex-wrow gap-4 flex-wrap">
                    {publicToken ? (
                        <PlaidAuth />
                    ) : (
                        <button
                            onClick={() => open()}
                            disabled={!ready}
                            className="font-medium text-slate-100 bg-purple-600 px-2 py-1 rounded">
                            Link Account
                        </button>
                    )}
                </div>
            </div>
            <div className="glass-card p-4">
                <p>Assets</p>
            </div>
            <div className="glass-card p-4">
                <p>Goals</p>
            </div>
        </div>
    );
};

export default Dashboard;
