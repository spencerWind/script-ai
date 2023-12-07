/* eslint-disable react/prop-types */

const BudgetOverview = ({ budgets }) => {
    const totalBudget = () => {
        let totalBudget = 0;

        budgets.map((budget) => (totalBudget += budget.totalAmount));

        return totalBudget;
    };

    const currentProgress = () => {
        let currentProgress = 0;

        budgets.map((budget) => (currentProgress += budget.currentAmount));

        return currentProgress;
    };

    const progressPercentage = () => {
        let totalBudget = 0;
        let currentProgress = 0;

        budgets.map((budget) => (totalBudget += budget.totalAmount));
        budgets.map((budget) => (currentProgress += budget.currentAmount));

        const percentage = currentProgress / totalBudget;

        return percentage;
    };


    return (
        budgets && (
            <div className="mt-16">
                <div className="h-12 relative rounded-lg flex justify-end items-center bg-purple-200 overflow-clip">
                    <div
                        style={{
                            width: `${progressPercentage() * 100}%`,
                            transition: "width 0.5s ease",
                        }}
                        className="absolute border-purple-500 left-0 h-12 rounded-lg text-lg bg-purple-500 text-slate-100 flex items-center pr-4 font-bold min-w-max justify-end">
                        <span>${currentProgress()}</span>
                    </div>
                    {progressPercentage() < 0.95 && <p className="mr-4 text-sm font-medium">${totalBudget()}</p>}
                    {currentProgress() > totalBudget() && <p className="z-20 mr-4 font-bold text-slate-100">${currentProgress()} / ${totalBudget()}</p> }

                </div>
            </div>
        )
    );
};

export default BudgetOverview;
