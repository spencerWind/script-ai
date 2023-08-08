import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NavTitle = ({ children, style }) => {

    return (
        <Link to={"/"}>
            <h1 className={`${style}`}>{children}</h1>
        </Link>
    );
};

NavTitle.propTypes = {
    children: PropTypes.any,
    style: PropTypes.string,
};

export default NavTitle;
