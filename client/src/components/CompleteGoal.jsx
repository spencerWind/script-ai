/* eslint-disable react/prop-types */
import axios from "axios";
import { useSavingsGoalContext } from "../hooks/useSavingsGoalContext";

const DeleteGoal = ({ savingsGoal }) => {
    const { dispatch } = useSavingsGoalContext();
    const _id = savingsGoal._id;
    const user = savingsGoal.user;

    

    const markAsCompleted = async () => {
        await axios
            .patch("http://localhost:8000/api/goal/update", {
                _id,
                user,
                completed: true,
                pinned: false,
            })
            .then((res) => {
                console.log("Success: ", res.data);
                dispatch({
                    type: "UPDATE_SAVINGS_GOAL",
                    payload: res.data.savingsGoal
                })
            })
            .catch((err) => {
                console.log("Error: ", err);
            });
    };

    return (
        <button
            onClick={markAsCompleted}
            className="rounded underline font-medium">
            Complete
        </button>
    );
};

export default DeleteGoal;
