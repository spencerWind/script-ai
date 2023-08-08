const Dashboard = () => {
    return (
        <div className="lg:grid grid-cols-3 grid-rows-4 gap-16 h-full w-full">
            <div className="col-span-2 row-span-2 glass-card p-4">
                <p>Finance Overview</p>
            </div>
            <div className="row-span-2 glass-card p-4">
                <p>Transactions</p>
            </div>
            <div className="col-span-2 glass-card p-4">
                <p>Budget</p>
            </div>
            <div className="row-span-2 glass-card p-4">
                <p>Investments</p>
            </div>
            <div className="glass-card p-4">
                <p>Assets</p>
            </div>
            <div className="glass-card p-4">
                <p>Goals</p>
            </div>
        </div>
    );
};

export default Dashboard;
