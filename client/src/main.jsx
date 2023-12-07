import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./css/index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { SavingsGoalContextProvider } from "./context/SavingsGoalContext";
import { BudgetContextProvider } from "./context/BudgetContext";
import { TransactionContextProvider } from "./context/TransactionContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthContextProvider>
                <BudgetContextProvider>
                    <SavingsGoalContextProvider>
                        <TransactionContextProvider>
                            <App />
                        </TransactionContextProvider>
                    </SavingsGoalContextProvider>
                </BudgetContextProvider>
            </AuthContextProvider>
        </BrowserRouter>
    </React.StrictMode>
);
