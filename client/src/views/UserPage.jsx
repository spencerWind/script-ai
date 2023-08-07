import { Routes, Route} from "react-router-dom";
import Container from "../components/script-ui/Container";
import Dashboard from "./Dashboard";
import Transactions from "./Transactions";
import Budget from "./Budget";
import Goals from "./Goals";

const UserPage = () => {

    return (
        <Container className={"border border-black flex flex-row"}>
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
                        path="/goals"
                        element={<Goals />}
                    />
                </Routes>
            </div>
        </Container>
    );
};

export default UserPage;
