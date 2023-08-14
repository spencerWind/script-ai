import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import axios from "axios";
import { useSavingsGoalContext } from "../hooks/useSavingsGoalContext";

const GoalForm = () => {
    const { user } = useAuthContext();
    const { dispatch } = useSavingsGoalContext();
    const [goalName, setGoalName] = useState("");
    const [targetAmount, setTargetAmount] = useState("");
    const [currentAmount, setCurrentAmount] = useState("");
    const [deadline, setDeadline] = useState("");

    const createGoal = async (e) => {
        e.preventDefault();
        await axios
            .post("http://localhost:8000/api/goal/create", {
                user: user._id,
                goalName,
                targetAmount,
                currentAmount,
                deadline,
                completed: false,
            })
            .then((res) => {
                dispatch({
                    type: "CREATE_SAVINGS_GOAL",
                    payload: res.data.savingsGoal,
                });
                console.log("Success: ", res.data);
                setGoalName("");
                setTargetAmount("");
                setCurrentAmount("");
                setDeadline("");
            })
            .catch((err) => {
                console.log("Error: ", err);
            });
    };

    return (
        <div className="rounded p-4 w-full ">
            <form onSubmit={createGoal}>
                <div className="flex flex-col gap-8 md:items-center">
                    <div className="flex gap-4 md:w-4/5">
                        <label
                            className="text-slate-900 dark:text-slate-100"
                            htmlFor="goalName">
                            Goal Name:
                        </label>
                        <input
                            required
                            className="h-8 rounded text-slate-900 px-2 w-full"
                            type="text"
                            id="goalName"
                            value={goalName}
                            onChange={(e) => setGoalName(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-row gap-2 items-center md:w-4/5">
                        <label
                            className="w-24 text-slate-900 dark:text-slate-100"
                            htmlFor="targetAmount">
                            Target Amount:
                        </label>
                        <input
                            required
                            className="h-8 w-full rounded text-slate-900 px-2"
                            type="number"
                            id="targetAmount"
                            value={targetAmount}
                            onChange={(e) => {
                                setTargetAmount(e.target.value);
                            }}
                        />
                    </div>
                    <div className="flex flex-row gap-2 items-center md:w-4/5">
                        <label
                            className="w-24 text-slate-900 dark:text-slate-100"
                            htmlFor="currentAmount">
                            Current Amount:
                        </label>
                        <input
                            required
                            className="h-8 w-full rounded text-slate-900 px-2"
                            type="number"
                            id="currentAmount"
                            value={currentAmount}
                            onChange={(e) => {
                                setCurrentAmount(e.target.value);
                            }}
                        />
                    </div>
                    <div className="flex flex-row gap-2 items-center md:w-4/5">
                        <label
                            className="w-24 text-slate-900 dark:text-slate-100"
                            htmlFor="deadline">
                            Deadline:
                        </label>
                        <input
                            required
                            className="h-8 w-full rounded text-slate-900 px-2"
                            type="date"
                            id="deadline"
                            value={deadline}
                            onChange={(e) => {
                                setDeadline(e.target.value);
                            }}
                        />
                    </div>
                    <input
                        className="h-8 bg-purple-500 max:md w-full md:w-4/5 text-slate-100 rounded font-bold self-center"
                        type="submit"
                        value="Create Goal"
                    />
                </div>
            </form>
        </div>
    );
};

export default GoalForm;
