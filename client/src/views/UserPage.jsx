import { Routes, Route } from "react-router-dom";
import Container from "../components/script-ui/Container";
import Transactions from "./Transactions";
import Budget from "./Budget";
import Goals from "./Goals";
import NavBar from "../components/navigation/Navigation";
import Sidebar from "../components/navigation/Sidebar";
import { useBudgetContext } from "../hooks/useBudgetContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { useEffect } from "react";
import axios from "axios";
import { useSavingsGoalContext } from "../hooks/useSavingsGoalContext";
import {useTransactionContext} from "../hooks/useTransactionContext"

const UserPage = () => {
    const { user } = useAuthContext();
    const { dispatch: dispatchBudget } = useBudgetContext();
    const { dispatch: dispatchSavingsGoals } = useSavingsGoalContext();
    const { dispatch: dispatchTransactions} = useTransactionContext()

    useEffect(() => {
        const fetchSavingsGoals = async () => {
            await axios
                .get("http://localhost:8000/api/goal/fetch", {
                    params: {
                        userId: user._id,
                    },
                })
                .then((savingsGoals) => {
                    dispatchSavingsGoals({
                        type: "SET_SAVINGS_GOALS",
                        payload: savingsGoals.data,
                    });
                    console.log("Success: ", savingsGoals.data);
                })
                .catch((err) => {
                    console.log("Error fetching goals: ", err);
                });
        };

        fetchSavingsGoals();
    }, [dispatchSavingsGoals, user._id]);

    useEffect(() => {
        const fetchBudgets = async () => {
            await axios
                .get("http://localhost:8000/api/budget/fetch", {
                    params: {
                        user: user._id,
                    },
                })
                .then((budgets) => {
                    dispatchBudget({
                        type: "SET_BUDGETS",
                        payload: budgets.data,
                    });
                    console.log("Success: ", budgets.data);
                })
                .catch((err) => {
                    console.log("Error fetching goals: ", err);
                });
        };

        fetchBudgets();
    }, [dispatchBudget, user._id]);

    useEffect(() => {
        const fetchTransactions = async () => {
            await axios
                .get("http://localhost:8000/api/transaction/fetch", {
                    params: {
                        userId: user._id,
                    },
                })
                .then((transactions) => {
                    dispatchTransactions({
                        type: "SET_TRANSACTIONS",
                        payload: transactions.data,
                    });
                    console.log("Success: ", transactions.data);
                })
                .catch((err) => {
                    console.log("Error fetching transactions: ", err);
                });
        };
        fetchTransactions();
    }, [dispatchTransactions, user._id]);

    return (
        <Container>
            <NavBar />
            <div
                id="appView"
                className="lg:flex">
                <Sidebar />
                <div className="w-full">
                    <Routes>
                        {/* <Route
                            default
                            path="/"
                            element={<Dashboard />}
                        /> */}
                        <Route
                            path="/"
                            element={<Transactions />}
                        />
                        <Route
                            path="/transactions"
                            element={<Transactions />}
                        />
                        <Route
                            path="/budget"
                            element={<Budget />}
                        />
                        <Route
                            path="/goals"
                            element={<Goals />}
                        />
                    </Routes>
                </div>
            </div>
        </Container>
    );
};

export default UserPage;
