import { Routes, Route } from "react-router-dom";
import Container from "../components/script-ui/Container";
import Dashboard from "./Dashboard";
import Transactions from "./Transactions";
import Budget from "./Budget";
import Goals from "./Goals";
import NavBar from "../components/Navigation";
import Sidebar from "../components/Sidebar";
import { SavingsGoalContextProvider } from "../context/SavingsGoalContext";

const UserPage = () => {

    
    return (
        <SavingsGoalContextProvider>
            <Container>
                <NavBar />
                <div
                    id="appView"
                    className="lg:flex">
                    {/* <Sidebar /> */}
                    <div className="w-full">
                        <Routes>
                            {/* <Route
                                path="/"
                                element={<Dashboard />}
                            />
                            <Route
                                path="/transactions"
                                element={<Transactions />}
                            />
                            <Route
                                path="/budget"
                                element={<Budget />}
                            /> */}
                            <Route
                                default
                                path="/"
                                element={<Goals />}
                            />
                        </Routes>
                    </div>
                </div>
            </Container>
        </SavingsGoalContextProvider>
    );
};

export default UserPage;
