/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import CompleteGoal from "./CompleteGoal";
import PinGoal from "./PinGoal";
import DeleteGoal from "./DeleteGoal";
import UpdateGoalProgress from "./UpdateGoalProgress"

const GoalDisplay = ({ savingsGoal }) => {
    const [progressWidth, setProgressWidth] = useState(0);

    function calculateProgressWidth(targetAmount, currentAmount) {
        const progress = (currentAmount / targetAmount) * 100;
        return progress;
    }

    useEffect(() => {
        setProgressWidth(
            calculateProgressWidth(
                savingsGoal.targetAmount,
                savingsGoal.currentAmount
            )
        );
    }, [savingsGoal]);

    return (
        <div className={`p-4 rounded bg-[rgba(139,92,246,0.3)] ${savingsGoal.completed && "opacity-50"} lg:flex gap-4  justify-between relative`}>
            <div className="lg:w-1/2 max-lg:mb-8">
                {" "}
                <h1 className="font-medium text-3xl mb-4   leading-none">
                    {savingsGoal.goalName}
                </h1>
                <p className="mb-4 text-sm">
                    Target:{" "}
                    <span className="font-semibold">
                        {savingsGoal.deadline.split("T", 1)}
                    </span>
                </p>
                <div>
                    <p className="mb-2">
                        <span className="font-semibold">
                            ${savingsGoal.currentAmount}
                        </span>{" "}
                        /{" "}
                        <span className="font-semibold">
                            ${savingsGoal.targetAmount}
                        </span>
                    </p>
                    <div className="border border-green-500 h-8 rounded-2xl bg-slate-100 overflow-hidden mb-4">
                        <div
                            style={{
                                width: `${progressWidth}%`,
                            }}
                            className="bg-green-500 h-16 top-0 left-0"></div>
                    </div>
                    <UpdateGoalProgress savingsGoal={savingsGoal} />
                </div>
            </div>
            <div className="flex gap-8 items-start">
                <PinGoal savingsGoal={savingsGoal} />
                <CompleteGoal savingsGoal={savingsGoal} />
                <DeleteGoal savingsGoal={savingsGoal} />
            </div>
        </div>
    );
};

export default GoalDisplay;
