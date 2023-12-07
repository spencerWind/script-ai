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
                <div className="p-4 glass-card lg:w-1/2 max-h-max">
                    <div className="flex flex-row items-center justify-between mb-2">
                        <Header>Categories</Header>
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
                <div className="p-4 glass-card lg:w-1/2 h-max">
                    <BudgetInsights />
                </div>
            </div>
        </div>
    );
};

export default Budget;
