/* eslint-disable react/prop-types */

import { useState } from "react";
import { useBudgetContext } from "../../hooks/useBudgetContext";
import axios from "axios";
import trashIcon from "../../assets/trashIcon.svg";

const EditBudgetForm = ({ budget }) => {
    // setting values for form items
    const [categoryName, setCategoryName] = useState(budget.categoryName);
    const [totalAmount, setTotalAmount] = useState(budget.totalAmount);

    // setting values for form submission
    const { _id, user } = budget;
    const { dispatch } = useBudgetContext();

    // update budget
    const updateBudget = async (e) => {
        e.preventDefault();

        await axios
            .patch("http://localhost:8000/api/budget/update/info", {
                _id,
                user,
                categoryName,
                totalAmount,
            })
            .then((res) => {
                console.log("Success: ", res.data);
                                dispatch({
                                    type: "UPDATE_BUDGET",
                                    payload: res.data.deletedBudget,
                                });
                document
                    .getElementById("updateBudgetsModal")
                    .classList.add("hidden");
            })
            .catch((err) => {
                console.log("Error: ", err);
            });
    };

    // delete budget
    const deleteBudget = async () => {
        await axios
            .delete("http://localhost:8000/api/budget/delete", {
                params: {
                    _id,
                    user,
                },
            })
            .then((res) => {
                console.log("Success: ", res.data);
                document
                    .getElementById("updateBudgetsModal")
                    .classList.add("hidden");
                dispatch({
                    type: "DELETE_BUDGET",
                    payload: res.data.deletedBudget,
                });
            })
            .catch((err) => {
                console.log("Error: ", err);
            });
    };

    return (
        <form
            onSubmit={updateBudget}
            className="p-4 flex w-full items-center justify-between gap-8">
            <div className="w-2/5 h-16 flex items-center gap-8">
                <label
                    className="text-slate-900 dark:text-slate-100"
                    htmlFor={"editBudgetCategory" + budget._id}>
                    Category:
                </label>
                <input
                    type="text"
                    id={"editBudgetCategory" + budget._id}
                    className="h-8 w-2/3 rounded text-slate-900 px-2"
                    value={categoryName}
                    onChange={(e) => {
                        setCategoryName(e.target.value);
                    }}
                />
            </div>
            <div className="w-2/5 h-16 flex items-center gap-8">
                <label
                    className="text-slate-900 dark:text-slate-100"
                    htmlFor={"editBudgetAmount" + budget._id}>
                    Budget:
                </label>
                <input
                    type="text"
                    id={"editBudgetAmount" + budget._id}
                    className="h-8 w-2/3 rounded text-slate-900 px-2"
                    value={totalAmount}
                    onChange={(e) => {
                        setTotalAmount(e.target.value);
                    }}
                />
            </div>
            <button
                type="submit"
                className="w-48 h-8 font-medium bg-purple-500 text-slate-50 rounded">
                Update
            </button>
            <button
                onClick={() => {
                    deleteBudget();
                }}>
                <img
                    src={trashIcon}
                    alt="delete"
                />
            </button>
        </form>
    );
};

export default EditBudgetForm;
