import { useAuthContext } from "../../hooks/useAuthContext";
import { useTransactionContext } from "../../hooks/useTransactionContext";
import axios from "axios";

const ClearTransactionsModal = () => {
    const { dispatch } = useTransactionContext();
    const { user } = useAuthContext();

    const clearTransactions = async () => {
        await axios
            .delete("http://localhost:8000/api/transaction/delete", {
                params: {
                    user: user._id,
                },
            })
            .then((res) => {
                console.log("Success: ", res.data);
                dispatch({
                    type: "DELETE_TRANSACTIONS",
                });
                document
                    .getElementById("clearTransactionsModal")
                    .classList.add("hidden");
            })
            .catch((err) => {
                console.log("Error: ", err);
            });
    };

    return (
        <div
            id="clearTransactionsModal"
            className="fixed top-0 left-0 h-screen w-screen glass-card flex justify-center items-center hidden">
            <div className="w-[400px] p-4 glass-card rounded">
                <p>Are you sure you would like to clear transactions?</p>
                <p className="text-center mb-8">
                    Doing so will also reset your budget...
                </p>
                <div className="flex flex-row gap-8 justify-center">
                    <button
                        onClick={() => {
                            document
                                .getElementById("clearTransactionsModal")
                                .classList.add("hidden");
                        }}
                        className="h-8 w-32 font-bold dark:text-slate-100">
                        Cancel
                    </button>
                    <button
                        onClick={() => {
                            clearTransactions();
                        }}
                        className="h-8 w-32 rounded bg-red-500 font-bold text-slate-50">
                        Clear
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ClearTransactionsModal;
