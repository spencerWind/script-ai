const Goals = () => {
    return (
        <div className="h-full grid grid-cols-2 grid-rows-2 gap-8">
            <div className="border border-black dark:border-white col-span-2 flex justify-center items-center">
                <p>Goals overview</p>
            </div>
            <div className="border border-black dark:border-white flex justify-center items-center">
                <p>Goal Checklist</p>
            </div>
            <div className="border border-black dark:border-white flex justify-center items-center">
                <p>Add a goal</p>
            </div>
        </div>
    );
};

export default Goals;
