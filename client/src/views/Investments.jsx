const Investments = () => {
    return (
        <div className="h-full grid grid-cols-3 grid-rows-4 gap-8">
            <div className="border border-black dark:border-white col-span-2 row-span-4 flex justify-center items-center">
                <p>Investment Overview</p>
            </div>
            <div className="border border-black dark:border-white row-span-3 flex justify-center items-center">
                <p>Growth</p>
            </div>
            <div className="border border-black dark:border-white flex justify-center items-center">
                <p>Retirement</p>
            </div>
        </div>
    );
};

export default Investments;
