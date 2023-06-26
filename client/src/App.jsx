// react-router-dom imports
import { Routes, Route } from "react-router-dom";

//component imports
import Container from "./components/script-ui/Container";
import Dashboard from "./views/Dashboard";
import Sidebar from "./components/Sidebar";

const App = () => {
    return (
        <div className="min-h-screen bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-300 flex w-full justify-center">
            <Container className={"w-full flex flex-row"}>
                <Sidebar />
                <div
                    id="appView"
                    className="w-full border min-h-full p-4">
                    <Routes>
                        <Route
                            path="/"
                            element={<Dashboard />}
                        />
                    </Routes>
                </div>
            </Container>
        </div>
    );
};

export default App;
