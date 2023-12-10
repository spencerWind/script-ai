import { useBudgetContext } from "../../hooks/useBudgetContext";
import Header from "../script-ui/Header";
import EditBudgetForm from "./EditBudgetForm";

const EditBudgetsModal = () => {
    const { budgets } = useBudgetContext();

    return (
        <div
            id="updateBudgetsModal"
            className="fixed top-0 left-0 h-screen w-screen glass-card flex justify-center items-center hidden">
            <div className=" w-[1024px] p-4 glass-card rounded">
                <div className="flex w-full items-center justify-between pb-4 border-b border-violet-500">
                    <Header>Edit Budgets</Header>
                    <button
                        className="text-red-500 font-black text-2xl"
                        onClick={() => {
                            document
                                .getElementById("updateBudgetsModal")
                                .classList.add("hidden");
                        }}>
                        x
                    </button>
                </div>
                <div className="">
                    {budgets && budgets.length > 0 &&
                        budgets.map((budget) => (
                            <EditBudgetForm
                                key={budget._id}
                                budget={budget}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default EditBudgetsModal;
