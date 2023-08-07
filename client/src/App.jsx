// react-router-dom imports
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./views/LoginPage";
import UserPage from "./views/UserPage";
import Container from "./components/script-ui/Container";
import NavBar from "./components/Navigation";
import { useAuthContext } from "./hooks/useAuthContext";
import Dashboard from "./views/Dashboard";
import Sidebar from "./components/Sidebar";

// App
const App = () => {
    const { user } = useAuthContext();

    return (
        <div className="min-h-screen bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
            <Container className="m-auto">
                <NavBar></NavBar>
                <div className="flex flex-row">
                    {user ? <Sidebar /> : ""}
                    <div className="w-full">
                        <Routes>
                            <Route
                                path="/"
                                element={
                                    user ? <Dashboard /> : <LoginPage />
                                }></Route>
                            <Route
                                path="/*"
                                element={
                                    user ? <UserPage /> : <Navigate to="/" />
                                }></Route>
                        </Routes>
                    </div>
                </div>
            </Container>
        </div>
    );
};

//Export
export default App;
