/* eslint-disable react/prop-types */
import dollarIcon from "../../assets/dollarIcon.svg";

const BudgetItem = ({ budget }) => {

    const progressPercentage = () => {
        const percentage = (budget.currentAmount / budget.totalAmount)

        return percentage
    }

    return (
        <div className="py-8">
            <div className=" flex flex-row items-center justify-between ">
                <div className="flex flex-row items-center gap-2 text-xl font-light">
                    <img
                        src={dollarIcon}
                        alt="icon"
                    />
                    <h1>{budget.categoryName}</h1>
                </div>
                <div className="flex lg:w-1/2 items-center ">
                    <div className="flex items-center gap-2 p-1 h-10 relative w-full rounded-lg justify-end bg-purple-200 overflow-clip">
                        <div
                            style={{
                                width: `${progressPercentage() * 100}%`,
                                transition: "width 0.5s ease",
                            }}
                            className="absolute border-purple-500 left-0 h-12 rounded-lg bg-purple-500 text-slate-100 flex items-center pr-1 pl-1 font-bold min-w-max justify-end">
                            <span>${budget.currentAmount}</span>
                        </div>
                    </div>
                    <span className=" w-20 flex items-center justify-end ml-2 font-light">
                        ${budget.totalAmount}
                    </span>
                </div>
            </div>
        </div>
    );
};

                    {
                        /* {modalIsOpen ? (
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
                    )} */
                    }

export default BudgetItem;
