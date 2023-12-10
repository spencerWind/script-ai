import { useSavingsGoalContext } from "../../hooks/useSavingsGoalContext";
import Header from "../script-ui/Header";
import EditGoalForm from "./EditGoalForm";

const EditGoalsModal = () => {
    const {savingsGoals} = useSavingsGoalContext()

    return (
        <div
            id="editGoalsModal"
            className="fixed hidden top-0 left-0 h-screen w-screen glass-card flex justify-center items-center">
            <div className="w-[1024px] p-4 glass-card rounded">
                <div className="flex w-full items-center justify-between pb-4 border-b border-violet-500">
                    <Header>Edit Goals</Header>
                    <button
                        className="text-red-500 font-black text-2xl"
                        onClick={() => {
                            document
                                .getElementById("editGoalsModal")
                                .classList.add("hidden");
                        }}>
                        x
                    </button>
                </div>
                    {
                        savingsGoals && savingsGoals.length > 0 && savingsGoals.map((savingsGoal) => (
                            <EditGoalForm key={savingsGoal._id} savingsGoal={savingsGoal} />
                        ))
                    }
            </div>
        </div>
    );
};

export default EditGoalsModal;
