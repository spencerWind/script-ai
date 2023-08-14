// react-router-dom imports
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./views/HomePage";
import UserPage from "./views/UserPage";
import { useAuthContext } from "./hooks/useAuthContext";

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
                                path="/login"
                                element={
                                    user ? <UserPage /> : <HomePage />
                                }></Route>
                                <Route
                                    path="/"
                                    element={
                                        user ? (
                                            <UserPage />
                                        ) : (
                                            <Navigate to="/login" />
                                        )
                                    }></Route>
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    );
};

//Export
export default App;
