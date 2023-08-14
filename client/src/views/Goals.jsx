import { useEffect } from "react";
import { useSavingsGoalContext } from "../hooks/useSavingsGoalContext";
import { useAuthContext } from "../hooks/useAuthContext";
import axios from "axios";
import GoalDisplay from "../components/GoalDisplay";
import GoalForm from "../components/GoalForm";

const Goals = () => {
    const { savingsGoals, dispatch } = useSavingsGoalContext();
    const { user } = useAuthContext();

    useEffect(() => {
        const fetchSavingsGoals = async () => {
            await axios
                .get("http://localhost:8000/api/goal/fetch", {
                    params: {
                        userId: user._id,
                    },
                })
                .then((savingsGoals) => {
                    dispatch({
                        type: "SET_SAVINGS_GOALS",
                        payload: savingsGoals.data,
                    });
                    console.log("Success: ", savingsGoals.data);
                })
                .catch((err) => {
                    console.log("Error fetching goals: ", err);
                });
        };

        fetchSavingsGoals();
    }, []);

    return (
        <div className="relative">
            <div className="text-xl mb-16">
                <h1 className="font-bold">Welcome {user.firstName}! </h1>
                <p>Dynamically update and track savings goals with our intuitive, easy to use application!</p>
            </div>
            <div className="lg:flex gap-16 mb-16">
                <div className=" p-4 glass-card lg:w-1/2 max-lg:mb-16">
                    <p className="mb-4">Pinned Goals</p>
                    {savingsGoals &&
                        savingsGoals
                            .filter((goal) => goal.pinned)
                            .map((savingsGoal) => (
                                <GoalDisplay
                                    key={savingsGoal._id}
                                    savingsGoal={savingsGoal}
                                />
                            ))}
                </div>
                <div className="p-4 glass-card lg:w-1/2">
                    <p className="mb-4">Add a goal</p>
                    <GoalForm />
                </div>
            </div>
            <div className="p-4 glass-card col-span-2 flex flex-col gap-4 mb-16">
                <h3>All goals</h3>
                {savingsGoals &&
                    savingsGoals
                        .filter((goal) => goal.completed === false)
                        .map((savingsGoal) => (
                            <GoalDisplay
                                key={savingsGoal._id}
                                savingsGoal={savingsGoal}
                            />
                        ))}
                {savingsGoals &&
                    savingsGoals
                        .filter((goal) => goal.completed === true)
                        .map((savingsGoal) => (
                            <GoalDisplay
                                key={savingsGoal._id}
                                savingsGoal={savingsGoal}
                            />
                        ))}
            </div>
        </div>
    );
};

export default Goals;
