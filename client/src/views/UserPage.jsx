import { Routes, Route } from "react-router-dom";
import Container from "../components/script-ui/Container";
import Sidebar from "../components/Sidebar";
import Dashboard from "./Dashboard";
import Transactions from "./Transactions";
import Budget from "./Budget";
import Investments from "./Investments";
import Assets from "./Assets";
import Goals from "./Goals";

const UserPage = () => {
    return (
        <Container className={"w-full flex flex-row"}>
            <Sidebar />
            <div
                id="appView"
                className="w-full min-h-full p-4">
                <Routes>
                    <Route
                        default
                        path="/dashboard"
                        element={<Dashboard />}
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
                        path="/investments"
                        element={<Investments />}
                    />
                    <Route
                        path="/assets"
                        element={<Assets />}
                    />
                    <Route
                        path="/goals"
                        element={<Goals />}
                    />
                </Routes>
            </div>
        </Container>
    );
};

export default UserPage;
