// react-router-dom imports
import { Routes, Route } from "react-router-dom";

//component imports
import Container from "./components/script-ui/Container";
import Sidebar from "./components/Sidebar";
import Dashboard from "./views/Dashboard";
import Transactions from "./views/Transactions";
import Investments from "./views/Investments";
import Budget from "./views/Budget";
import Assets from "./views/Assets";
import Goals from "./views/Goals"

// App
const App = () => {
    return (
        <div className="min-h-screen bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-300 flex w-full justify-center">
            <Container className={"w-full flex flex-row"}>
                <Sidebar />
                <div
                    id="appView"
                    className="w-full min-h-full p-4">
                    <Routes>
                        <Route
                            default
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
        </div>
    );
};

//Export
export default App;
