const Assets = () => {
    return (
        <div className="h-full grid grid-cols-2 grid-rows-4 gap-8">
            <div className="border border-black dark:border-white col-span-2 flex justify-center items-center">
                <p>Overview</p>
            </div>
            <div className="border border-black dark:border-white row-span-2 col-span-2 flex justify-center items-center">
                <p>Assets List</p>
            </div>
            <div className="border border-black dark:border-white flex col-span-2 justify-center items-center">
                <p>Real Estate</p>
            </div>
        </div>
    );
};

export default Assets;
