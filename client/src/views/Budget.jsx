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
                    <Header styles={"p-2 border-b"}>Categories</Header>
                    {budgets &&
                        budgets.map((budget) => (
                            <BudgetItem
                                budget={budget}
                                key={budget._id}
                            />
                        ))}
                </div>
                <div className="p-4 glass-card lg:w-1/3 h-max">
                    <Header styles={"p-2 border-b mb-4"}>Actions</Header>
                    <div className="flex flex-row items-center gap-8">
                        <button
                            onClick={() => {
                                document
                                    .getElementById("createBudgetModal")
                                    .classList.remove("hidden");
                            }}
                            className="h-8 px-2 rounded bg-violet-600 text-slate-50 text-sm">
                            Add Category
                        </button>
                        <button
                            onClick={() => {
                                document
                                    .getElementById("clearTransactionsModal")
                                    .classList.remove("hidden");
                            }}
                            className="h-8 px-2 rounded bg-violet-800 text-slate-50 text-sm">
                            Clear Budget
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Budget;
