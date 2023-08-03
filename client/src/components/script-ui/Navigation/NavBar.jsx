import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const NavBar = ({ background, children, text }) => {
    const [backGroundColor, setBackgroundColor] = useState("");
    const [textColor, setTextColor] = useState("");

    useEffect(() => {
        if (text === "white") {
            setTextColor("text-slate-100");
        }
        if (text === "black") {
            setTextColor("text-slate-950");
        }
        if (background === "primary") {
            setBackgroundColor("bg-primary");
        }
        if (background === "secondary") {
            setBackgroundColor("bg-secondary");
        }
    }, [background, text]);

    return (
        <nav
            className={`flex items-center justify-between ${backGroundColor} ${textColor} h-16`}>
            {children}
        </nav>
    );
};

NavBar.propTypes = {
    background: PropTypes.string,
    children: PropTypes.any,
    text: PropTypes.any,
};

export default NavBar;
