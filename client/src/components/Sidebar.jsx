import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
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
        <div className="w-64 p-4 flex flex-col justify-between items-center">
            <div className="h-16">
                <Link to={"/"}>
                    <h1 className="text-lg font-bold">Script Finance</h1>
                </Link>
            </div>

            <div className="flex flex-col items-center gap-4">
                <Link to={"/"}>
                    <p className="">Dashboard</p>
                </Link>
                <Link to={"/transactions"}>
                    <p className="">Transactions</p>
                </Link>
                <Link to={"/budget"}>
                    <p className="">Budget</p>
                </Link>
                <Link to={"/investments"}>
                    <p className="">Investments</p>
                </Link>
                <Link to={"/assets"}>
                    <p className="">Assets</p>
                </Link>
                <Link to={"/goals"}>
                    <p className="">Goals</p>
                </Link>
            </div>
            <div className="h-16">
                <button
                    className="p-2 rounded-xl bg-green-600"
                    onClick={handleThemeSwitch}>
                    Dark Mode
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
