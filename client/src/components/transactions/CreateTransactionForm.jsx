/* eslint-disable react/prop-types */
import { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useTransactionContext } from "../../hooks/useTransactionContext";
import { useBudgetContext } from "../../hooks/useBudgetContext";
import axios from "axios";

const CreateTransactionForm = () => {
    const [transactionName, setTransactionName] = useState("");
    const [transactionAmount, setTransactionAmount] = useState("");
    const [categoryName, setCategoryName] = useState("");
    const { user } = useAuthContext();
    const { dispatch } = useTransactionContext();
    const {budgets} = useBudgetContext()

    const createTransaction = async (e) => {
        e.preventDefault();
        await axios
            .post("http://localhost:8000/api/transaction/create", {
                user: user._id,
                transactionName,
                transactionAmount,
                categoryName,
            })
            .then((transaction) => {
                dispatch({
                    type: "CREATE_TRANSACTION",
                    payload: transaction.data.transaction,
                });
                console.log("Success: ", transaction.data);
                setTransactionName("");
                setTransactionAmount("");
                setCategoryName("");
            })
            .catch((err) => {
                console.log("Error: ", err);
            });
    };

    return (
        <div className="">
            <form
                className="p-4"
                onSubmit={createTransaction}>
                <div className="flex flex-col gap-8">
                    <div>
                        <label
                            htmlFor="transactionName"
                            className="font-light">
                            Name:
                        </label>
                        <input
                            required
                            type="text"
                            className="h-8 w-full rounded px-2 mt-1"
                            id="transactionName"
                            value={transactionName}
                            onChange={(e) => {
                                setTransactionName(e.target.value);
                            }}
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="categoryName"
                            className="font-light">
                            Category:
                        </label>
                        <select
                            type="text"
                            className="h-8 w-full rounded px-2 mt-1"
                            id="categoryName"
                            onChange={(e) => {setCategoryName(e.target.value)}}>
                                {
                                    budgets && budgets.map((budget) => (
                                        <option key={budget.categoryName} value={budget.categoryName}>{budget.categoryName}</option>
                                    ))
                                }
                            </select>
                    </div>
                    <div>
                        <label
                            htmlFor="transactionAmount"
                            className="font-light mt-1">
                            Amount:
                        </label>
                        <input
                            required
                            type="number"
                            className="h-8 w-full rounded px-2 mt-1"
                            id="transactionAmount"
                            value={transactionAmount}
                            onChange={(e) => {
                                setTransactionAmount(e.target.value);
                            }}
                        />
                    </div>
                    <input
                        type="submit"
                        className="h-8 w-full rounded bg-purple-500 font-medium text-slate-100"
                    />
                </div>
            </form>
        </div>
    );
};

export default CreateTransactionForm;
