/* eslint-disable react/prop-types */
import { useState } from "react";
import { useSavingsGoalContext } from "../../hooks/useSavingsGoalContext";
import axios from "axios";
import trashIcon from "../../assets/trashIcon.svg";

const EditGoalForm = ({savingsGoal}) => {
    // setting values for form items
    const [goalName, setGoalName] = useState(savingsGoal.goalName)
    const [targetAmount, setTargetAmount] = useState(savingsGoal.targetAmount)

    const {_id, user} = savingsGoal
    const {dispatch} = useSavingsGoalContext()

    // create goal
    const updateGoal = async (e) => {
        e.preventDefault()

                await axios
                    .patch("http://localhost:8000/api/goal/update/", {
                        _id,
                        user,
                        goalName,
                        targetAmount,
                    })
                    .then((res) => {
                        console.log("Success: ", res.data);
                        document
                            .getElementById("editGoalsModal")
                            .classList.add("hidden");
                        dispatch({
                            type: "UPDATE_SAVINGS_GOAL",
                            payload: res.data.savingsGoal,
                        });
                    })
                    .catch((err) => {
                        console.log("Error: ", err);
                    });
    }

    // delete goal
    const deleteGoal = async () => {
                await axios
            .delete("http://localhost:8000/api/goal/delete", {
                params: {
                    _id,
                    user,
                },
            })
            .then((res) => {
                console.log("Success: ", res.data);
                document
                    .getElementById("editGoalsModal")
                    .classList.add("hidden");
                dispatch({
                    type: "DELETE_SAVINGS_GOAL",
                    payload: res.data.deletedGoal,
                });
            })
            .catch((err) => {
                console.log("Error: ", err);
            });
    };

    return (
        <div className="flex gap-8">
            <form
                onSubmit={updateGoal}
                className="p-4 lg:flex w-full items-center justify-between gap-8">
                <div className="w-full md:w-2/5 h-16 flex items-center gap-8">
                    <label
                        className="text-slate-900 dark:text-slate-100 font-light"
                        htmlFor={"editSavingsGoalName" + savingsGoal._id}>
                        Name:
                    </label>
                    <input
                        type="text"
                        id={"editSavingsGoalName" + savingsGoal._id}
                        className="h-8 rounded text-slate-900 px-2"
                        value={goalName}
                        onChange={(e) => {
                            setGoalName(e.target.value);
                        }}
                    />
                </div>
                <div className="h-16 flex items-center gap-8">
                    <label
                        className="text-slate-900 dark:text-slate-100 font-light"
                        htmlFor={"editGoalAmount" + savingsGoal._id}>
                        Target:
                    </label>
                    <div>
                        <span className="mr-2">$</span>
                        <input
                            type="text"
                            id={"editGoalAmount" + savingsGoal._id}
                            className="h-8 rounded text-slate-900 px-2"
                            value={targetAmount}
                            onChange={(e) => {
                                setTargetAmount(e.target.value);
                            }}
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    className="w-full md:w-48 h-8 font-medium bg-purple-500 text-slate-50 rounded">
                    Update
                </button>
            </form>
            <button
                className="max-md:self-end max-md:mb-4"
                onClick={() => {
                    deleteGoal();
                }}>
                <img
                    src={trashIcon}
                    alt="delete"
                />
            </button>
        </div>
    );
};

export default EditGoalForm;
