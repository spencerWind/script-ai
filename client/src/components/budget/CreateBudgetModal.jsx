import { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useBudgetContext } from "../../hooks/useBudgetContext";
import axios from "axios";
import Header from "../script-ui/Header";

const CreateBudgetModal = () => {
    const [categoryName, setCategoryName] = useState("");
    const [totalAmount, setTotalAmount] = useState("");
    const { user } = useAuthContext();
    const { dispatch } = useBudgetContext();

    const createBudget = async (e) => {
        e.preventDefault();
        await axios
            .post("http://localhost:8000/api/budget/create", {
                user: user._id,
                categoryName,
                currentAmount: 0,
                totalAmount,
            })
            .then((budget) => {
                dispatch({
                    type: "CREATE_BUDGET",
                    payload: budget.data.budget,
                });
                console.log("Success: ", budget.data);
                setCategoryName("");
                setTotalAmount("");
                document
                    .getElementById("createBudgetModal")
                    .classList.add("hidden");
            })
            .catch((err) => {
                console.log("Error: ", err);
            });
    };

    return (
        <div
            id="createBudgetModal"
            className="fixed top-0 left-0 h-screen w-screen glass-card flex justify-center items-center hidden">
            <form
                onSubmit={createBudget}
                className=" w-[448px] p-4 glass-card rounded">
                <div>
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-row items-center justify-between font-bold pb-2 border-b border-violet-500">
                            <Header styles={""}>Create Budget</Header>
                            <button
                                className="text-red-500 font-black text-2xl"
                                onClick={() => {
                                    document
                                        .getElementById("createBudgetModal")
                                        .classList.add("hidden");
                                }}>
                                x
                            </button>
                        </div>
                        <div className="">
                            <label
                                className="font-light"
                                htmlFor="budgetCategoryName">
                                Category:
                            </label>
                            <div className="flex items-center">
                                <span className="text-xl mr-2">$</span>
                                <input
                                    required
                                    className="h-8 w-full mt-1 rounded text-slate-900 px-2"
                                    type="text"
                                    id="budgetCategoryName"
                                    value={categoryName}
                                    onChange={(e) => {
                                        setCategoryName(e.target.value);
                                    }}
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                className="font-light"
                                htmlFor="budgetTargetAmount">
                                Budget:
                            </label>
                            <div className="w-full">
                                <input
                                    required
                                    className="h-8 w-full mt-1 rounded text-slate-900 px-2"
                                    type="number"
                                    id="budgetTargetAmount"
                                    value={totalAmount}
                                    onChange={(e) => {
                                        setTotalAmount(e.target.value);
                                    }}
                                />
                            </div>
                        </div>
                        <input
                            className="h-8 bg-purple-500 text-slate-100 rounded font-medium"
                            type="submit"
                            value="Create"
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CreateBudgetModal;
