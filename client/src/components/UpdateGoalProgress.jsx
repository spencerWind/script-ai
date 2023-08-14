/* eslint-disable react/prop-types */
import axios from "axios";
import { useSavingsGoalContext } from "../hooks/useSavingsGoalContext";
import { useState } from "react";

const UpdateGoalProgress = ({ savingsGoal }) => {
    const { dispatch } = useSavingsGoalContext();
    const { _id, user } = savingsGoal;
    const [formisOpen, setFormisOpen] = useState(false);
    const [currentAmount, setCurrentAmount] = useState("");

    const toggleForm = () => {
        setFormisOpen(!formisOpen);
    };

    const updateGoalProgress = async (e) => {

        e.preventDefault();

        await axios
            .patch("http://localhost:8000/api/goal/update", {
                _id,
                user,
                currentAmount,
            })
            .then((res) => {
                console.log("Success: ", res.data);
                dispatch({
                    type: "UPDATE_SAVINGS_GOAL",
                    payload: res.data.savingsGoal,
                });
                setFormisOpen(!formisOpen);
            })
            .catch((err) => {
                console.log("Error: ", err);
            });
    };

    return (
        <>
            {!formisOpen && (
                <button
                    onClick={toggleForm}
                    className="underline">
                    Update progress
                </button>
            )}
            {formisOpen && (
                <form onSubmit={updateGoalProgress}>
                    <div className="flex flex-row gap-2 items-center">
                        <input
                        placeholder="amount"
                            required
                            className="h-8 w-32 rounded text-slate-900 px-2"
                            type="number"
                            id="currentAmount"
                            value={currentAmount}
                            onChange={(e) => {
                                setCurrentAmount(e.target.value);
                            }}
                        />
                        <input
                            className="cursor-pointer rounded font-bold"
                            type="submit"
                            value="Update"
                        />
                    </div>
                </form>
            )}
        </>
    );
};

export default UpdateGoalProgress;
