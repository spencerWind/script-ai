import PropTypes from "prop-types";
import { useState } from "react";
import axios from "axios";
import { useBudgetContext } from "../../hooks/useBudgetContext";

const UpdateBudgetProgressModal = ({ budget }) => {
    // creating variable for current budget progress
    const [currentAmount, setCurrentAmount] = useState(budget.currentAmount);

    // setting variables for form submission
    const { _id, user } = budget;
    const { dispatch } = useBudgetContext();

    // form submission
    const updateProgress = async (e) => {
        e.preventDefault();

        await axios
            .patch("http://localhost:8000/api/budget/update", {
                _id,
                user,
                currentAmount,
            })
            .then((res) => {
                console.log("Success: ", res.data);
                dispatch({
                    type: "UPDATE_BUDGET",
                    payload: res.data.budget,
                });
                document
                    .getElementById("updateBudgetProgressModal")
                    .classList.add("hidden");
            })
            .catch((err) => {
                console.log("Error: ", err);
            });
    };

    return (
        <div
            id="updateBudgetProgressModal"
            className="fixed top-0 left-0 w-full h-full bg-budget-modal hidden">
            <form
                onSubmit={updateProgress}
                className=" my-16 flex items-center justify-center">
                <div className=" w-[400px] p-2 bg-slate-100/80 rounded">
                    <div className="flex flex-row items-center justify-between font-bold mb-4">
                        <h1>Update Progress</h1>
                        <button
                            className="text-red-500 font-black text-2xl"
                            onClick={() => {
                                document
                                    .getElementById("updateBudgetProgressModal")
                                    .classList.add("hidden");
                            }}>
                            x
                        </button>
                    </div>
                    <div className="flex flex-row gap-2 items-center justify-center mb-4">
                        <label
                            className=" w-28 text-slate-900 dark:text-slate-100"
                            htmlFor="currentAmount">
                            Progress:
                        </label>
                        <input
                            required
                            className="h-8 w-30 rounded text-slate-900 px-2"
                            type="text"
                            id="currentAmount"
                            value={currentAmount}
                            onChange={(e) => {
                                setCurrentAmount(e.target.value);
                            }}
                        />
                    </div>
                    <div className="flex justify-center">
                        <button type="submit" className="h-8 w-72 rounded px-2 text-slate-100 font-bold bg-purple-500 mb-4">
                            Update Progress
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

UpdateBudgetProgressModal.propTypes = {
    budget: PropTypes.any,
};

export default UpdateBudgetProgressModal;
