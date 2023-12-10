import { useSavingsGoalContext } from "../hooks/useSavingsGoalContext";
import { useAuthContext } from "../hooks/useAuthContext";
import GoalDisplay from "../components/goals/GoalDisplay";
import GoalForm from "../components/goals/GoalForm";
import Header from "../components/script-ui/Header";
import UpdateGoalProgress from "../components/goals/UpdateGoalProgress";

const Goals = () => {
    const { savingsGoals } = useSavingsGoalContext();

    return (
        <div className="lg: flex gap-16">
            <div className="lg:w-2/3 h-max glass-card p-4 mb-16 pb-32">
                <div className="col-span-2 flex flex-col gap-4">
                    <Header styles={"pb-4 border-b border-purple-500"}>
                        All Goals
                    </Header>
                    {savingsGoals &&
                        savingsGoals.length > 0 &&
                        savingsGoals
                            .filter((goal) => goal.completed === false)
                            .map((savingsGoal) => (
                                <GoalDisplay
                                    key={savingsGoal._id}
                                    savingsGoal={savingsGoal}
                                />
                            ))}
                    {savingsGoals &&
                        savingsGoals.length > 0 &&
                        savingsGoals
                            .filter((goal) => goal.completed === true)
                            .map((savingsGoal) => (
                                <GoalDisplay
                                    key={savingsGoal._id}
                                    savingsGoal={savingsGoal}
                                />
                            ))}
                    {savingsGoals && savingsGoals.length > 0 ? (
                        ""
                    ) : (
                        <div className="h-16 flex items-center justify-center text-lg">
                            No goals yet...
                        </div>
                    )}
                </div>
            </div>
            <div>
                {savingsGoals && savingsGoals.length > 0 && (
                    <div className="w-[512px] p-4 glass-card mb-16 pb-8">
                        <Header styles={"pb-4 border-b border-violet-500"}>
                            Update Goals
                        </Header>
                        {savingsGoals &&
                            savingsGoals.map((savingsGoal) => (
                                <UpdateGoalProgress
                                    key={savingsGoal._id}
                                    savingsGoal={savingsGoal}
                                />
                            ))}
                    </div>
                )}
                <div className="w-[512px] h-max glass-card p-4 mb-16">
                    <Header styles={"pb-4 mb-8 border-b border-purple-500"}>
                        Actions
                    </Header>
                    <div
                        className={
                            savingsGoals && savingsGoals.length > 0
                                ? "flex flex-row items-center justify-center flex-wrap gap-12 mb-8"
                                : "flex flex-row items-center flex-wrap gap-12 mb-8"
                        }>
                        <button
                            onClick={() => {
                                document
                                    .getElementById("createGoalModal")
                                    .classList.remove("hidden");
                            }}
                            className="h-10 mb-8 w-48 rounded bg-slate-900 dark:bg-slate-100 font-medium text-slate-50 dark:text-slate-950">
                            Add Goal
                        </button>
                        {savingsGoals && savingsGoals.length > 0 && (
                            <button
                                onClick={() => {
                                    document
                                        .getElementById("editGoalsModal")
                                        .classList.remove("hidden");
                                }}
                                className="h-10 mb-8 w-48 rounded bg-slate-900 dark:bg-slate-100 font-medium text-slate-50 dark:text-slate-950">
                                Edit Goals
                            </button>
                        )}
                    </div>
                </div>
            </div>{" "}
        </div>
    );
};

export default Goals;
