const Budget = () => {
    return (
        <div className="h-full grid grid-cols-2 grid-rows-4 gap-8">
            <div className="border border-black dark:border-white col-span-2 row-span-2 flex justify-center items-center">
                <p>Budget Overview</p>
            </div>
            <div className="border border-black dark:border-white row-span-2 flex justify-center items-center">
                <p>Categories</p>
            </div>
            <div className="border border-black dark:border-white flex justify-center items-center row-span-2">
                <p>Long Term Overview</p>
            </div>
        </div>
    );
};

export default Budget;
