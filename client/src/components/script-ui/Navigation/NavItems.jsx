import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { useAnimation, motion } from "framer-motion";
import { Link } from "react-router-dom";

const NavItems = ({ children, mobile }) => {
    const [mobileSize, setMobileSize] = useState(false);
    const { backgroundColor, textColor } = mobile;
    const mobileMenuAnimation = useAnimation();

    const mobileMenuIcon = (
        <div className="h-6 w-8 flex flex-col justify-between">
            <div className="w-full h-1 rounded bg-black dark:bg-white"></div>
            <div className="w-full h-1 rounded bg-black dark:bg-white"></div>
            <div className="w-full h-1 rounded bg-black dark:bg-white"></div>
        </div>
    );

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768 && !mobileSize) {
                setMobileSize(true);
            } else if (window.innerWidth > 768 && mobileSize) {
                setMobileSize(false);
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [mobileSize]);

    return (
        <section className="flex items-center">
            <motion.ul
                animate={mobileSize ? mobileMenuAnimation : ""}
                className={
                    mobileSize
                        ? `fixed z-10 top-0 right-[-100%] w-full h-screen ${backgroundColor} flex flex-col items-center gap-12 justify-center ${textColor}`
                        : "flex flex-row items-center gap-12 lg:gap-8"
                }>
                <Link to={"/transactions"}>
                    <p>Transactions</p>
                </Link>
                <Link to="/budget">
                    <p>Budget</p>
                </Link>
                <Link to="/goals">
                    <p>Goals</p>
                </Link>

                {React.Children.map(children, (child) => {
                    if (React.isValidElement(child)) {
                        return React.cloneElement(child, {});
                    }
                    return child;
                })}
                <button
                    onClick={() => {
                        mobileMenuAnimation.start(
                            mobileMenuAnimation.start({
                                x: 0,
                            })
                        );
                    }}
                    className="w-16 h-16 md:hidden">
                    <p className="text-4xl font-black">X</p>
                </button>
            </motion.ul>
            <button
                onClick={() => {
                    mobileMenuAnimation.start({
                        x: "-100%",
                    });
                }}
                className="md:hidden">
                {mobileMenuIcon}
            </button>
        </section>
    );
};

NavItems.propTypes = {
    children: PropTypes.any,
    mobile: PropTypes.object,
};

export default NavItems;
