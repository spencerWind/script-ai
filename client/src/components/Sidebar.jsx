import { Link } from "react-router-dom";

const Sidebar = () => {

    return (
        <div className="w-64 p-4 flex flex-col justify-between items-center">
            <div className="flex flex-col items-center gap-4">
                <Link to={"/dashboard"}>
                    <p className="">Dashboard</p>
                </Link>
                <Link to={"/transactions"}>
                    <p className="">Transactions</p>
                </Link>
                <Link to={"/budget"}>
                    <p className="">Budget</p>
                </Link>
                <Link to={"/goals"}>
                    <p className="">Goals</p>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;
