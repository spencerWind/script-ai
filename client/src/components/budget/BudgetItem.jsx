/* eslint-disable react/prop-types */
import { useState } from "react";
import dollarIcon from "../../assets/dollarIcon.svg";
import BudgetItemDisplay from "./BudgetItemDisplay";

const BudgetItem = ({ budget }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <div className="border-b py-4">
            <div className=" flex flex-row items-center justify-between ">
                <div className="flex flex-row items-center gap-2 text-lg">
                    <img
                        src={dollarIcon}
                        alt="icon"
                    />
                    <h1>{budget.categoryName}</h1>
                </div>
                <div className="flex items-center gap-1">
                    <span className="text-2xl font-bold text-purple-500">
                        ${budget.currentAmount}
                    </span>{" "}
                    /{" "}
                    <span className="text-sm font-bold text-purple-800 dark:text-purple-300">
                        {budget.totalAmount}
                    </span>
                    {modalIsOpen ? (
                        <button
                            onClick={() => {
                                setModalIsOpen(!modalIsOpen);
                            }}
                            className="ml-2 font-black text-2xl">
                            v
                        </button>
                    ) : (
                        <button
                            onClick={() => {
                                setModalIsOpen(!modalIsOpen);
                            }}
                            className="ml-2 font-black text-2xl">
                            &gt;
                        </button>
                    )}
                </div>
            </div>
            {modalIsOpen && (
                <div className="mt-4">
                    <BudgetItemDisplay budget={budget} />
                </div>
            )}
        </div>
    );
};

export default BudgetItem;
