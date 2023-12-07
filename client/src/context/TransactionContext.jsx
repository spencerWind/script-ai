/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";

export const TransactionContext = createContext();

export const TransactionReducer = (state, action) => {
    switch (action.type) {
        case "SET_TRANSACTIONS":
            return { transactions: action.payload };
        case "CREATE_TRANSACTION":
            return { transactions: [action.payload, ...state.transactions] };
        case "UPDATE_TRANSACTION":
            return {
                transactions: state.transactions.map((transaction) =>
                    transaction._id === action.payload._id
                        ? action.payload
                        : transaction
                ),
            };
        case "DELETE_TRANSACTIONS":
            return {
                transactions: []
            };
        default:
            return state;
    }
};

export const TransactionContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(TransactionReducer, {
        transactions: null,
    });

    return (
        <TransactionContext.Provider value={{ ...state, dispatch }}>
            {children}
        </TransactionContext.Provider>
    );
};
