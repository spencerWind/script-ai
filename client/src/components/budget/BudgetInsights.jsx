import { useEffect, useState } from "react";
import { useBudgetContext } from "../../hooks/useBudgetContext";
import DateTimeUtils from "../../utilities/DateTimeUtils";
import Header from "../script-ui/Header";
import SubHeader from "../script-ui/Subheader";


const BudgetInsights = () => {
    const { budgets } = useBudgetContext();

    return (
        <div>
            <Header styles="mb-4">Insights</Header>
            <div className=" border-t">
                <div className="my-4">
                    <h2 className="font-medium">Daily Spending</h2>
                    <div className="flex gap-32 mt-2">
                        <div className="flex">
                            <p className="font-light text-sm">Current:&nbsp;</p>
                            <p>$&nbsp;</p>

                        </div>
                        <div className="flex">
                            <p className="font-light">Target:&nbsp;</p>
                            <p>$&nbsp;</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h2>Weekly Spending</h2>
                </div>
            </div>
        </div>
    );
};

export default BudgetInsights;
