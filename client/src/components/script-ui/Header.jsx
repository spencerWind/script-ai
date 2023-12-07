import PropType from "prop-types";

const Header = ({children, styles}) => {
    return <h2 className={`font-semibold text-lg ${styles}`}>{children}</h2>;
};

Header.propTypes = {
    children: PropType.string,
    styles: PropType.string,
};

export default Header;
