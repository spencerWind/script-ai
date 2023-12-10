/* eslint-disable react/prop-types */
import axios from "axios";
import { useSavingsGoalContext } from "../../hooks/useSavingsGoalContext";
import { useState } from "react";

const UpdateGoalProgress = ({ savingsGoal }) => {
    const { dispatch } = useSavingsGoalContext();
    const { _id, user } = savingsGoal;
    const [currentAmount, setCurrentAmount] = useState("");
    

    const updateGoalProgress = async (e) => {
        e.preventDefault();
        const newTotal = parseInt(currentAmount) + parseInt(savingsGoal.currentAmount);
        console.log(newTotal)
        await axios
            .patch("http://localhost:8000/api/goal/update", {
                _id,
                user,
                currentAmount: newTotal
            })
            .then((res) => {
                console.log("Success: ", res.data);
                dispatch({
                    type: "UPDATE_SAVINGS_GOAL",
                    payload: res.data.savingsGoal,
                });
                setCurrentAmount(0)
            })
            .catch((err) => {
                console.log("Error: ", err);
            });
    };

    return (
        <div className="flex items-center justify-between py-4 border-b">
            <h1>{savingsGoal.goalName}</h1>
            <form onSubmit={updateGoalProgress}>
                <div className="flex flex-row items-center gap-4">
                    <div>
                        <span className="text-lg mr-2">$</span>
                        <input
                            placeholder="0"
                            required
                            className="h-8 w-24 rounded text-slate-900 px-2"
                            type="number"
                            id="currentAmount"
                            value={currentAmount}
                            onChange={(e) => {
                                setCurrentAmount(e.target.value);
                            }}
                        />
                    </div>
                    <input
                        className="cursor-pointer text-slate-100 px-2 h-8 rounded font-medium bg-violet-800"
                        type="submit"
                        value="Add Progress"
                    />
                </div>
            </form>
        </div>
    );
};

export default UpdateGoalProgress;
