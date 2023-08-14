import { SavingsGoalContext } from "../context/SavingsGoalContext";
import { useContext } from "react";

export const useSavingsGoalContext = () => {
    const context = useContext(SavingsGoalContext);

    if (!context) {
        throw Error(
            "useSavingsGoalContext must be used inside a SavingsGoalContextProvider"
        );
    }

    return context;
};
