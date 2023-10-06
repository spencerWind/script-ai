import { useSavingsGoalContext } from "../hooks/useSavingsGoalContext";
import { useAuthContext } from "../hooks/useAuthContext";
import GoalDisplay from "../components/goals/GoalDisplay";
import GoalForm from "../components/goals/GoalForm";

const Goals = () => {
    const { savingsGoals } = useSavingsGoalContext();
    const { user } = useAuthContext();

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
            <div className="p-4 col-span-2 flex flex-col gap-4 mb-16">
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
