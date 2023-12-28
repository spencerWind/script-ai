import PropTypes from "prop-types";

const Container = ({ children, className }) => {
    return (
        <div className={`px-4 m-auto  max-w-[1440px] ${className}`}>
            {children}
        </div>
    );
};

export default Container;

Container.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
};
