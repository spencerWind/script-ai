import { useEffect, useState } from "react";
import { useBudgetContext } from "../../hooks/useBudgetContext";
import DateTimeUtils from "../../utilities/DateTimeUtils";
import Header from "../script-ui/Header";
import SubHeader from "../script-ui/Subheader";


const BudgetInsights = () => {
    const { budgets } = useBudgetContext();

    return (
        <div>
            <Header styles="mb-4">Actions</Header>
        </div>
    );
};

export default BudgetInsights;
