// react-router-dom imports
import { Routes, Route } from "react-router-dom";
import LoginPage from "./views/LoginPage";
import UserPage from "./views/UserPage";
import Container from "./components/script-ui/Container";
import NavBar from "./components/Navigation";

// App
const App = () => {

    return (
        <div className="flex justify-center min-h-screen bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
            <Container className="">
                <NavBar className="border-2 border-black h-16"></NavBar>
                <div className="">
                    <Routes>
                        <Route
                            path="/login"
                            element={<LoginPage />}></Route>
                        <Route
                            path="*"
                            element={<UserPage />}></Route>
                    </Routes>
                </div>
            </Container>
        </div>
    );
};

//Export
export default App;
