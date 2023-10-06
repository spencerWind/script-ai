/* eslint-disable react/prop-types */
import axios from "axios";
import { useSavingsGoalContext } from "../../hooks/useSavingsGoalContext";

const PinGoal = ({ savingsGoal }) => {
    const { dispatch } = useSavingsGoalContext();
    const {_id, user, pinned} = savingsGoal

    const pinSavingsGoal = async () => {
    
        await axios
            .patch("http://localhost:8000/api/goal/update", {
                _id,
                user,
                pinned: pinned ? false : true,
            })
            .then((res) => {
                console.log("Success: ", res.data);
                dispatch({
                    type: "UPDATE_SAVINGS_GOAL",
                    payload: res.data.savingsGoal,
                });
            })
            .catch((err) => {
                console.log("Error: ", err);
            });
    };

    return (
        <button
            onClick={pinSavingsGoal}
            className="rounded underline font-medium">
            {pinned ? "Unpin" : "Pin"}
        </button>
    );
};

export default PinGoal;
