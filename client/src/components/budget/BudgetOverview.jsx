/* eslint-disable react/prop-types */
import DateTimeUtils from "../../utilities/DateTimeUtils";

const BudgetOverview = ({ budgets }) => {
    // total budget
    const totalBudget = () => {
        let totalBudget = 0;

        budgets.map((budget) => (totalBudget += budget.totalAmount));

        return totalBudget;
    };

    // current progress
    const totalSpending = () => {
        let currentProgress = 0;

        budgets.map((budget) => (currentProgress += budget.currentAmount));

        return currentProgress;
    };

    // daily spending
    const dailySpending = () => {
        const dailySpending =
            totalSpending() / DateTimeUtils.getDaysInCurrentMonth();

        return dailySpending % 1 !== 0
            ? dailySpending.toFixed(2)
            : dailySpending;
    };

    // target daily spending
    const targetDailySpending = () => {
        const targetDailySpending =
            totalBudget() / DateTimeUtils.getDaysInCurrentMonth();

        return targetDailySpending % 1 !== 0
            ? targetDailySpending.toFixed(2)
            : targetDailySpending;
    };

    // weekly spending
    const weeklySpending = () => {
        const weeklySpending =
            totalSpending() / DateTimeUtils.getWeeksInCurrentMonth();

        return weeklySpending % 1 !== 0
            ? weeklySpending.toFixed(2)
            : weeklySpending;
    };

    // target weekly spending
    const targetWeeklySpending = () => {
        const targetWeeklySpending =
            totalBudget() / DateTimeUtils.getWeeksInCurrentMonth();

        return targetWeeklySpending % 1 !== 0
            ? targetWeeklySpending.toFixed(2)
            : targetWeeklySpending;
    };

    // weekly trend
    const weeklyTrend = () => {
        const weeklyTrend =
            targetWeeklySpending() - weeklySpending()

        return weeklyTrend % 1 !== 0
            ? Math.abs(weeklyTrend).toFixed(2)
            : Math.abs(weeklyTrend);
    };

    // monthly trend
    const monthlyTrend = () => {
        const monthlyTrend = (totalBudget() - totalSpending())

                return monthlyTrend % 1 !== 0
                    ? Math.abs(monthlyTrend).toFixed(2)
                    : Math.abs(monthlyTrend);
    }

    // budget progress percentage
    const progressPercentage = () => {
        let totalBudget = 0;
        let currentProgress = 0;

        budgets.map((budget) => (totalBudget += budget.totalAmount));
        budgets.map((budget) => (currentProgress += budget.currentAmount));

        const percentage = currentProgress / totalBudget;

        return percentage;
    };

    // projected daily spending

    // user interface
    return (
        budgets && (
            <div className="mt-16">
                <div className="flex items-center px-16 mb-16">
                    <div className="h-12 w-full relative rounded-lg flex justify-end items-center bg-purple-200 dark:bg-purple-800 overflow-clip">
                        <div
                            style={{
                                width: `${progressPercentage() * 100}%`,
                                transition: "width 0.5s ease",
                            }}
                            className="absolute border-purple-500 left-0 h-12 rounded-lg text-lg bg-purple-500 dark:bg-purple-300 dark:text-slate-900 text-slate-100 flex items-center pr-1 font-bold min-w-max justify-end">
                            <span>${totalSpending()}</span>
                        </div>
                    </div>
                    <span className=" text-slate-900 dark:text-slate-50 w-20 flex items-center justify-end ml-2 text-xl font-medium">${totalBudget()}</span>
                </div>
                <div className="flex mb-8 px-20">
                    <div className="w-full flex gap-32">
                        <div className="lg:w-1/2 h-full">
                            <h3 className="font-medium pb-4">Spending</h3>
                            <div className=" flex items-center justify-between py-2">
                                <span className="font-light">
                                    Current Daily:
                                </span>
                                <span className="text-lg">
                                    ${dailySpending()}
                                </span>
                            </div>
                            <div className="border-b border-violet-500 flex items-center justify-between py-2">
                                <span className="font-light">
                                    Target Daily:
                                </span>
                                <span className="text-lg">
                                    ${targetDailySpending()}
                                </span>
                            </div>
                            <div className="flex items-center justify-between py-2">
                                <span className="font-light">
                                    Current Weekly:
                                </span>
                                <span className="text-lg">
                                    ${weeklySpending()}
                                </span>
                            </div>
                            <div className="flex items-center justify-between py-2">
                                <span className="font-light">
                                    Target Weekly:
                                </span>
                                <span className="text-lg">
                                    ${targetWeeklySpending()}
                                </span>
                            </div>
                        </div>
                        <div className="lg:w-1/2 h-full">
                            <h3 className="font-medium pb-4">Stats</h3>
                            <div className=" flex items-center justify-between py-2">
                                <span className="font-light">
                                    Weekly Trend:
                                </span>
                                <span className="text-lg">
                                    {weeklySpending() > targetWeeklySpending()
                                        ? `$${weeklyTrend()} over`
                                        : `$${weeklyTrend()} under`}
                                </span>
                            </div>
                            <div className="border-b border-violet-500 flex items-center justify-between py-2">
                                <span className="font-light">
                                    Monthly Trend:
                                </span>
                                <span className="text-lg">
                                    {totalSpending() > totalBudget()
                                        ? `$${monthlyTrend()} over`
                                        : `$${monthlyTrend()} under`}
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* <div className="lg:w-1/2 h-full flex gap-16">
                        <div className="lg:w-1/2 h-full border">
                            <h3 className="font-medium">Projections</h3>
                        </div>
                    </div> */}
                </div>
            </div>
        )
    );
};

export default BudgetOverview;
