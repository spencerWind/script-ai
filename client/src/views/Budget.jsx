import BudgetItem from "../components/budget/BudgetItem";
import { useBudgetContext } from "../hooks/useBudgetContext";
import DateTimeUtils from "../utilities/DateTimeUtils";
import BudgetInsights from "../components/budget/BudgetInsights";
import Title from "../components/script-ui/Title";
import Header from "../components/script-ui/Header";
import BudgetOverview from "../components/budget/BudgetOverview";

const Budget = () => {
    const { budgets } = useBudgetContext();

    return (
        <div className="mb-32">
            <div
                className="glass-card p-4 mb-16"
                id="budgetOverview">
                <Title styles={"text-center"}>Budget Overview</Title>
                <p className="text-center font-light mb-4">
                    {DateTimeUtils.getCurrentFormattedDate()}
                </p>
                <BudgetOverview budgets={budgets} />
            </div>
            <div className="lg:flex flex-row gap-16">
                <div className="p-4 glass-card lg:w-2/3 max-h-max">
                    <Header styles={"pb-4 border-b border-violet-500"}>Categories</Header>
                    {budgets &&
                        budgets.map((budget) => (
                            <BudgetItem
                                budget={budget}
                                key={budget._id}
                            />
                        ))}
                </div>
                <div className="p-4 glass-card lg:w-[512px] h-max">
                    <Header styles={"pb-4 border-b border-violet-500 mb-8"}>Actions</Header>
                    <div className="flex flex-row items-center justify-center flex-wrap gap-12 mb-8">
                        <button
                            onClick={() => {
                                document
                                    .getElementById("createBudgetModal")
                                    .classList.remove("hidden");
                            }}
                            className="h-10 w-2/5 rounded bg-slate-900 dark:bg-slate-50 font-medium text-slate-50 dark:text-slate-950">
                            Add Category
                        </button>
                        <button onClick={() => {
                            document.getElementById("updateBudgetsModal").classList.remove("hidden");
                        }} className="h-10 w-2/5 rounded bg-slate-900 dark:bg-slate-100 font-medium text-slate-50 dark:text-slate-950">Edit Categories</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Budget;
