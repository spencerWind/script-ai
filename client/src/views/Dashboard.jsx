const Dashboard = () => {
    return (
        <div className="grid grid-cols-3 grid-rows-4 gap-8 h-full">
            <div className="border border-black dark:border-white col-span-2 row-span-2 flex items-center justify-center">
                <p>Finance Overview</p>
            </div>
            <div className="border border-black dark:border-white flex items-center justify-center row-span-2">
                <p>Transactions</p>
            </div>
            <div className="border border-black dark:border-white flex items-center justify-center col-span-2">
                <p>Budget</p>
            </div>
            <div className="border border-black dark:border-white flex items-center justify-center row-span-2">
                <p>Investments</p>
            </div>
            <div className="border border-black dark:border-white flex items-center justify-center">
                <p>Assets</p>
            </div>
            <div className="border border-black dark:border-white flex items-center justify-center">
                <p>Goals</p>
            </div>
        </div>
    );
};

export default Dashboard;
