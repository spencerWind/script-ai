import PropTypes from "prop-types";
import DateTimeUtils from "../../utilities/DateTimeUtils";
import DeleteBudget from "./DeleteBudget";
import UpdateBudgetModal from "./UpdateBudgetModal";
import UpdateBudgetProgress from "./UpdateBudgetProgress";

const BudgetItemDisplay = ({ budget }) => {
    // daily spending
    const dailySpending = Number(
        (
            budget.currentAmount / DateTimeUtils.getDaysSinceStartOfMonth()
        ).toFixed(2)
    );
    const targetDailySpending = Number(
        (budget.totalAmount / DateTimeUtils.getDaysInCurrentMonth()).toFixed(2)
    );
    // weekly spending
    const weeklySpending = Number(
        (
            budget.currentAmount / DateTimeUtils.getCurrentWeekInCurrentMonth()
        ).toFixed(2)
    );

    const targetWeeklySpending = Number(
        (budget.totalAmount / DateTimeUtils.getWeeksInCurrentMonth()).toFixed(2)
    );

    return (
        <div className="text-sm ml-10 my-8">
            <UpdateBudgetModal budget={budget} />
            <UpdateBudgetProgress budget={budget} />
            <div className="mb-4">
                <h3 className="font-medium mb-1">Daily</h3>
                <div className="grid grid-cols-2">
                    <div className="flex  items-center gap-4">
                        <h3 className="font-light">Current Spending:</h3>
                        <p className=" text-base">${dailySpending}</p>
                    </div>
                    <div className="flex  items-center gap-4">
                        <h3 className="font-light">Target Spending:</h3>
                        <p className=" text-base">${targetDailySpending}</p>
                    </div>
                </div>
            </div>
            <div className="mb-8">
                <h3 className="font-medium mb-1">Weekly</h3>
                <div className="grid grid-cols-2">
                    <div className="flex  items-center gap-4">
                        <h3 className="font-light">Current Spending:</h3>
                        <p className=" text-base">${weeklySpending}</p>
                    </div>
                    <div className="flex  items-center gap-4">
                        <h3 className="font-light">Target Spending:</h3>
                        <p className=" text-base">${targetWeeklySpending}</p>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-8 font-bold">
                <button
                    onClick={() => {
                        document
                            .getElementById("updateBudgetProgressForm")
                            .classList.remove("hidden");
                    }}
                    className="h-8 rounded border-2 px-2 text-green-600">
                    Update Progress
                </button>
                <button
                    onClick={() => {
                        document
                            .getElementById("updateBudgetModal")
                            .classList.remove("hidden");
                    }}
                    className="h-8 rounded border-2 px-2 text-blue-600">
                    Edit
                </button>
                <DeleteBudget budget={budget} />
            </div>
        </div>
    );
};

BudgetItemDisplay.propTypes = {
    budget: PropTypes.object,
};

export default BudgetItemDisplay;
