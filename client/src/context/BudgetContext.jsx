/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";

export const BudgetContext = createContext();

export const BudgetReducer = (state, action) => {
    switch (action.type) {
        case "SET_BUDGETS":
            return { budgets: action.payload };
        case "CREATE_BUDGET":
            return { budgets: [action.payload, ...state.budgets] };
        case "UPDATE_BUDGET":
            return {
                budgets: state.budgets.map((budget) =>
                    budget._id === action.payload._id ? action.payload : budget
                ),
            };
        case "RESET_BUDGETS":
            return {
                budgets: state.budgets.map((budget) => ({
                    ...budget,
                    currentAmount: 0,
                })),
            };
        case "DELETE_BUDGET":
            return {
                budgets: state.budgets.filter(
                    (budget) => budget._id != action.payload._id
                ),
            };
        default:
            return state;
    }
};

export const BudgetContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(BudgetReducer, {
        budgets: null,
    });

    return (
        <BudgetContext.Provider value={{ ...state, dispatch }}>
            {children}
        </BudgetContext.Provider>
    );
};
