/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import CompleteGoal from "./CompleteGoal";
import PinGoal from "./PinGoal";
import DeleteGoal from "./DeleteGoal";
import UpdateGoalProgress from "./UpdateGoalProgress";

const GoalDisplay = ({ savingsGoal }) => {
    
    const progressPercentage = () => {
        const percentage = (savingsGoal.currentAmount / savingsGoal.targetAmount)

        return percentage
    }

    return (
        <div className="py-8 border">
            <div className=" flex flex-row items-center justify-between ">
                <h1 className="text-xl font-light">{savingsGoal.goalName}</h1>
                <div className="flex lg:w-1/2 items-center">
                    <div className="flex items-center gap-2 p-1 h-10 relative w-full rounded-lg justify-end bg-purple-200 overflow-clip">
                        <div
                            style={{
                                width: `${progressPercentage() * 100}%`,
                                transition: "width 0.5s ease",
                            }}
                            className="absolute border-purple-500 left-0 h-12 rounded-lg bg-purple-500 text-slate-100 flex items-center pr-1 pl-1 font-bold min-w-max justify-end">
                            <span>${savingsGoal.currentAmount}</span>
                        </div>
                        <span className=" w-20 flex items-center justify-end ml-2 font-light">
                            ${savingsGoal.targetAmount}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GoalDisplay;
