/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useTransactionContext } from "../../hooks/useTransactionContext";
import { useBudgetContext } from "../../hooks/useBudgetContext";
import axios from "axios";

const CreateTransactionForm = () => {
    const [transactionName, setTransactionName] = useState("");
    const [transactionAmount, setTransactionAmount] = useState("");
    const [categoryName, setCategoryName] = useState("");
    const { user } = useAuthContext();
    const { dispatch: transactionDispatch } = useTransactionContext();
    const { dispatch: budgetDispatch, budgets } = useBudgetContext();

    useEffect(() => {
        setCategoryName("none")
    }, [])

    const updateBudget = async (categoryName, currentAmount) => {
        console.log(categoryName, currentAmount)
        console.log(user)
        const previousBudget = budgets.find((budget) => {
            return budget.categoryName === categoryName;
        });

        const updatedTotal = previousBudget.currentAmount + currentAmount

        await axios
            .patch("http://localhost:8000/api/budget/update/progress", {
                user: user._id,
                categoryName,
                currentAmount: updatedTotal,
            })
            .then((res) => {
                console.log("Budget updated: ", res.data);
                console.log("previousBudget:", previousBudget);
                budgetDispatch({
                    type: "UPDATE_BUDGET",
                    payload: res.data.budget,
                });
            })
            .catch((err) => {
                console.log("Error: ", err);
            });
    };

    //
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
                transactionDispatch({
                    type: "CREATE_TRANSACTION",
                    payload: transaction.data.transaction,
                });
                console.log("Success: ", transaction.data);
                updateBudget(
                    transaction.data.transaction.categoryName,
                    transaction.data.transaction.transactionAmount
                );
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
                            className="h-8 w-full rounded px-2 mt-1 text-slate-900"
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
                            className="h-8 w-full rounded px-2 mt-1 text-slate-900"
                            id="categoryName"
                            onChange={(e) => {
                                setCategoryName(e.target.value);
                            }}>
                            <option value="none">none</option>
                            {budgets &&
                                budgets.map((budget) => (
                                    <option
                                        key={budget._id}
                                        value={budget.categoryName}>
                                        {budget.categoryName}
                                    </option>
                                ))}
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
                            className="h-8 w-full rounded px-2 mt-1 text-slate-900"
                            id="transactionAmount"
                            value={transactionAmount}
                            onChange={(e) => {
                                setTransactionAmount(e.target.value);
                            }}
                        />
                    </div>
                    <input
                        type="submit"
                        className="h-10 w-full rounded bg-purple-500 font-medium text-slate-100"
                    />
                </div>
            </form>
        </div>
    );
};

export default CreateTransactionForm;
