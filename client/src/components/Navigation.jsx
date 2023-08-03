import { useState, useEffect } from "react";
import NavBar from "./script-ui/Navigation/NavBar";
import NavItems from "./script-ui/Navigation/NavItems";
import NavTitle from "./script-ui/Navigation/NavTitle";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogOut } from "../hooks/useLogOut";
import { Link } from "react-router-dom";

const Navigation = () => {
    const { logOut } = useLogOut();
    const { user } = useAuthContext();
    const logOutHandler = () => {
        logOut();
    };

    const [theme, setTheme] = useState("light");

    useEffect(() => {
        theme === "dark"
            ? document.body.classList.add("dark")
            : document.body.classList.remove("dark");
    }, [theme]);

    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <NavBar>
            <NavTitle>Script UI</NavTitle>
            <NavItems
                mobile={{
                    backgroundColor: "bg-slate-900",
                    textColor: "text-slate-100",
                }}>
                {user && <p>{user.email}</p>}
                {user ? (
                    <button onClick={logOutHandler}>Log Out</button>
                ) : (
                    <Link to="/login">Log In</Link>
                )}
                <button
                    className="p-2 rounded-xl bg-green-600"
                    onClick={handleThemeSwitch}>
                    Dark Mode
                </button>
            </NavItems>
        </NavBar>
    );
};

export default Navigation;
