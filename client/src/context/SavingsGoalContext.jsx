/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";

export const SavingsGoalContext = createContext();

export const GoalReducer = (state, action) => {
    switch (action.type) {
        case "SET_SAVINGS_GOALS":
            return { savingsGoals: action.payload };
        case "CREATE_SAVINGS_GOAL":
            return { savingsGoals: [action.payload, ...state.savingsGoals] };
        case "UPDATE_SAVINGS_GOAL":
            return {
                savingsGoals: state.savingsGoals.map((goal) =>
                    goal._id === action.payload._id ? action.payload : goal
                ),
            };
            case "DELETE_SAVINGS_GOAL":
                return {
                    savingsGoals : state.savingsGoals.filter((goal) => goal._id != action.payload._id)
                }
        default:
            return state;
    }
};

export const SavingsGoalContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(GoalReducer, {
        savingsGoals: null,
    });

    return (
        <SavingsGoalContext.Provider value={{ ...state, dispatch }}>
            {children}
        </SavingsGoalContext.Provider>
    );
};
