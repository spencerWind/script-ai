import PropType from "prop-types";

const SubHeader = ({children, styles}) => {
    return <h2 className={`font-medium text-sm ${styles}`}>{children}</h2>;
};

SubHeader.propTypes = {
    children: PropType.string,
    styles: PropType.string,
};

export default SubHeader;
