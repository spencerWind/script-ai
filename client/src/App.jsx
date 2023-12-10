// react-router-dom imports
import { Routes, Route} from "react-router-dom";
import HomePage from "./views/HomePage";
import UserPage from "./views/UserPage";
import { useAuthContext } from "./hooks/useAuthContext";
import CreateBudgetModal from "./components/budget/CreateBudgetModal";
import ClearTransactionsModal from "./components/transactions/ClearTransactionsModal";
import EditBudgetsModal from "./components/budget/EditBudgetsModal";
import CreateGoalModal from "./components/goals/CreateGoalModal";
import EditGoalsModal from "./components/goals/EditGoalsModal";

// App
const App = () => {
    const { user } = useAuthContext();

    return (
        <div className="min-h-screen bg-slate-100 text-slate-700 dark:bg-slate-900 dark:text-slate-200">
            <div className="m-auto">
                <div className="flex flex-row">
                    <div className="w-full">
                        <Routes>
                            <Route
                                path="/*"
                                element={
                                    user ? <UserPage /> : <HomePage />
                                }></Route>
                            {/* <Route
                                path="*"
                                element={
                                    user ? (
                                        <UserPage />
                                    ) : (
                                        <Navigate to="/login" />
                                    )
                                }></Route> */}
                        </Routes>
                    </div>
                </div>
            </div>

            {/* Modals */}
            <CreateBudgetModal />
            <ClearTransactionsModal />
            <EditBudgetsModal />
            <CreateGoalModal />
            <EditGoalsModal />
        </div>
    );
};

//Export
export default App;
