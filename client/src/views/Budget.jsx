import { useEffect, useState } from "react";
import BudgetItem from "../components/budget/BudgetItem";
import { useBudgetContext } from "../hooks/useBudgetContext";

const Budget = () => {
    const { budgets } = useBudgetContext();
    const [totalBudget, setTotalBudget] = useState(0);
    const [currentBudget, setCurrentBudget] = useState(0);

    useEffect(() => {
        let sumTotal = 0;
        let sumCurrent = 0;

        budgets.map((budget) => {
            sumTotal += budget.totalAmount;
            sumCurrent += budget.currentAmount;
        });

        setTotalBudget(sumTotal)
        setCurrentBudget(sumCurrent)
    }, [budgets]);

    return (
        <div className="mb-32">
            <div
                className="glass-card p-4 mb-16"
                id="budgetOverview">
                <h1 className="text-center font-bold text-xl">
                    Budget Overview
                </h1>
                <p className="text-center font-light mb-4">August 2023</p>
                <div>
                    <div className="flex flex-row justify-between mb-2">
                        <p className="flex items-center gap-2">
                            <span className="text-3xl font-bold text-purple-500">
                                ${currentBudget}
                            </span>
                            <span className="text-sm text-purple-800 dark:text-purple-300">
                                / ${totalBudget}
                            </span>
                        </p>
                        <p className="self-end">23 days to go</p>
                    </div>
                    <div className="border border-green-500 h-8 rounded-2xl bg-slate-100 overflow-hidden mb-4">
                        <div style={
                            {
                                width: `${currentBudget / totalBudget * 100}%`
                            }
                        } className="bg-green-500 h-full flex items-center"></div>
                    </div>
                </div>
                <div>
                    <p>Top Categories</p>
                    <div className="lg:flex flex-row items-center justify-between gap-16">
                        <div className="h-[300px] lg:w-1/3 border border-black"></div>
                        <div className="h-[300px] lg:w-1/3 border border-black"></div>
                        <div className="h-[300px] lg:w-1/3 border border-black"></div>
                    </div>
                </div>
            </div>
            <div className="lg:flex flex-row gap-16">
                <div className="p-4 glass-card lg:w-1/2">
                    <div className="flex flex-row items-center justify-between mb-2">
                        <h3>Categories</h3>
                        <button
                            className="text-purple-500 font-black text-3xl"
                            onClick={() => {
                                document
                                    .getElementById("createBudgetModal")
                                    .classList.remove("hidden");
                            }}>
                            +
                        </button>
                    </div>
                    {budgets &&
                        budgets.map((budget) => (
                            <BudgetItem
                                budget={budget}
                                key={budget._id}
                            />
                        ))}
                </div>
                <div className="p-4 glass-card lg:w-1/2">
                    <h3>Insights</h3>
                </div>
            </div>
        </div>
    );
};

export default Budget;
