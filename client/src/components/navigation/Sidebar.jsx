import { Link } from "react-router-dom";

const Sidebar = () => {

    return (
        <div className="max-lg:hidden">
            <div className="flex flex-col text-lg gap-8 font-bold underline pr-16">
                <Link to={"/transactions"}>
                    <p className="text-center">Transactions</p>
                </Link>
                <Link to={"/budget"}>
                    <p className="text-center">Budget</p>
                </Link>
                <Link to={"/goals"}>
                    <p className="text-center">Goals</p>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;
