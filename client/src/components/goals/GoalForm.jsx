import { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import axios from "axios";
import { useSavingsGoalContext } from "../../hooks/useSavingsGoalContext";
import Header from "../script-ui/Header";

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
                document.getElementById("createGoalModal").classList.add("hidden")
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
        <div className="">
            <form
                onSubmit={createGoal}
                className="p-4 flex flex-col gap-8">
                <div className="">
                    <label
                        className="font-light"
                        htmlFor="goalName">
                        Name:
                    </label>
                    <input
                        required
                        className="h-8 rounded px-2 w-full mt-1"
                        type="text"
                        id="goalName"
                        value={goalName}
                        onChange={(e) => setGoalName(e.target.value)}
                    />
                </div>
                <div className="">
                    <label
                        className="font-light"
                        htmlFor="targetAmount">
                        Target Amount:
                    </label>
                    <div className="flex items-center">
                        <span className="text-xl mr-2">$</span>
                        <input
                            required
                            className="h-8 w-full rounded px-2 mt-1"
                            type="number"
                            id="targetAmount"
                            value={targetAmount}
                            onChange={(e) => {
                                setTargetAmount(e.target.value);
                            }}
                        />
                    </div>
                </div>
                <div>
                    <label
                        className="font-light"
                        htmlFor="currentAmount">
                        Current Amount:
                    </label>
                    <div className="flex items-center">
                        <span className="text-xl mr-2">$</span>
                        <input
                            required
                            className="h-8 w-full rounded px-2 mt-1"
                            type="number"
                            id="currentAmount"
                            value={currentAmount}
                            onChange={(e) => {
                                setCurrentAmount(e.target.value);
                            }}
                        />
                    </div>
                </div>
                <div>
                    <label
                        className="font-light"
                        htmlFor="deadline">
                        Deadline:
                    </label>
                    <input
                        required
                        className="h-8 w-full rounded px-2 mt-1"
                        type="date"
                        id="deadline"
                        value={deadline}
                        onChange={(e) => {
                            setDeadline(e.target.value);
                        }}
                    />
                </div>
                <input
                    className="h-10 bg-purple-500 w-full text-slate-100 rounded font-medium"
                    type="submit"
                    value="Create"
                />
            </form>
        </div>
    );
};

export default GoalForm;
