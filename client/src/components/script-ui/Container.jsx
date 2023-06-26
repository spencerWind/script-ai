import PropTypes from "prop-types";

const Container = ({ children, className }) => {
    return (
        <div className={`p-4 max-w-[1440px] ${className}`}>
            {children}
        </div>
    );
};

export default Container;

Container.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
};
