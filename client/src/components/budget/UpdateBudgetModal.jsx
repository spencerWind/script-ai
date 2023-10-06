// import statements
import PropTypes from "prop-types";
import { useState } from "react";
import axios from "axios";
import { useBudgetContext } from "../../hooks/useBudgetContext";

const UpdateBudgetModal = ({ budget }) => {
    // setting values for form items
    const [categoryName, setCategoryName] = useState(budget.categoryName);
    const [totalAmount, setTotalAmount] = useState(budget.totalAmount);

    // setting values for form submission
    const { _id, user } = budget;
    const {dispatch} = useBudgetContext()

    // form submission
    const updateBudget = async (e) => {
        e.preventDefault();

        await axios
            .patch("http://localhost:8000/api/budget/update", {
                _id,
                user,
                categoryName,
                totalAmount
            })
            .then((res) => {
                                console.log("Success: ", res.data);
                                dispatch({
                                    type: "UPDATE_BUDGET",
                                    payload: res.data.budget,
                                });
                                document.getElementById("updateBudgetModal").classList.add("hidden");
            })
            .catch((err) => {
                console.log("Error: ", err);
            });
    };

    return (
        <div
            id="updateBudgetModal"
            className="fixed top-0 left-0 w-full h-full bg-budget-modal hidden">
            <form onSubmit={updateBudget} className=" my-6 flex items-center justify-center">
                <div className=" w-[400px] p-2 bg-slate-100/80 rounded">
                    <div className="flex flex-row items-center justify-between font-bold mb-4">
                        <h1>Edit Budget Item</h1>
                        <button
                            className="text-red-500 font-black text-2xl"
                            onClick={() => {
                                document
                                    .getElementById("updateBudgetModal")
                                    .classList.add("hidden");
                            }}>
                            x
                        </button>
                    </div>
                    <div className="flex flex-row gap-2 items-center justify-center mb-4">
                        <label
                            className=" w-28 text-slate-900 dark:text-slate-100"
                            htmlFor="budgetCategoryName">
                            Category:
                        </label>
                        <input
                            required
                            className="h-8 w-30 rounded text-slate-900 px-2"
                            type="text"
                            id="budgetCategoryName"
                            value={categoryName}
                            onChange={(e) => {
                                setCategoryName(e.target.value);
                            }}
                        />
                    </div>
                    <div className="flex flex-row gap-2 items-center justify-center mb-8">
                        <label
                            className="w-28 text-slate-900 dark:text-slate-100"
                            htmlFor="budgetTargetAmount">
                            Target Amount:
                        </label>
                        <div>
                            {/* <span className="mr-1 text-lg font-bold">$</span> */}
                            <input
                                required
                                className="h-8 w-30 rounded text-slate-900 px-2"
                                type="text"
                                id="budgetTargetAmount"
                                value={totalAmount}
                                onChange={(e) => {
                                    setTotalAmount(e.target.value);
                                }}
                            />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button className="h-8 w-72 rounded px-2 text-slate-100 font-bold bg-purple-500 mb-4">
                            Update Budget
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

UpdateBudgetModal.propTypes = {
    budget: PropTypes.object,
};

export default UpdateBudgetModal;
