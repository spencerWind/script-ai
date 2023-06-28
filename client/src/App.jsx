// react-router-dom imports
import { Routes, Route } from "react-router-dom";
import LoginPage from "./views/LoginPage";
import UserPage from "./views/UserPage";

// App
const App = () => {

    return (
        <div className="min-h-screen bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-300 flex w-full justify-center">
            <Routes>
                <Route
                    path="/"
                    element={<LoginPage />}></Route>
                <Route
                    path="/u/:id/*"
                    element={<UserPage />}
                />
            </Routes>
        </div>
    );
};

//Export
export default App;
