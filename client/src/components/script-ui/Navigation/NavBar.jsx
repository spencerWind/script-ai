import { useAuthContext } from "../../../hooks/useAuthContext";
import PropTypes from "prop-types";


const NavBar = ({children,}) => {
    const { user } = useAuthContext();
    return (
        <nav
            className={`${user ? "" : "hidden"} flex items-center justify-between h-16`}>
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
