import { useState, useEffect } from "react"
import { Link} from "react-router-dom";

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
        <div className="border w-64 p-4 flex flex-col justify-between items-center">
            <div>
                <Link to={"/"}>
                    <h1 className="text-lg font-bold">Script AI</h1>
                </Link>
                <Link to={"/"}>
                    <p className="text-lg font-bold">Script AI</p>
                </Link>
                <Link to={"/"}>
                    <p className="text-lg font-bold">Script AI</p>
                </Link>
                <Link to={"/"}>
                    <p className="text-lg font-bold">Script AI</p>
                </Link>
            </div>
            <div className="">
                <button
                    className="p-4 rounded-3xl bg-green-600"
                    onClick={handleThemeSwitch}>
                    Dark Mode
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
