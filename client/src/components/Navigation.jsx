import { useState, useEffect } from "react";
import NavBar from "./script-ui/Navigation/NavBar";
import NavItems from "./script-ui/Navigation/NavItems";
import NavTitle from "./script-ui/Navigation/NavTitle";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogOut } from "../hooks/useLogOut";

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
            <NavTitle style={"font-extrabold text-sm pr-16 text-green-600"}>
                Script Finance
            </NavTitle>
            <NavItems
                mobile={{
                    backgroundColor: "bg-slate-900",
                    textColor: "text-slate-100",
                }}>
                <button
                    className="font-medium text-sm"
                    onClick={handleThemeSwitch}>
                    Dark Mode
                </button>
                {user ? (
                    <button
                        onClick={logOutHandler}
                        className=" text-sm font-medium">
                        Log Out
                    </button>
                ) : (
                    ""
                )}
            </NavItems>
        </NavBar>
    );
};

export default Navigation;
