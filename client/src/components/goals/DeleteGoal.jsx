/* eslint-disable react/prop-types */
import axios from "axios";
import { useSavingsGoalContext } from "../../hooks/useSavingsGoalContext";

const DeleteGoal = ({ savingsGoal }) => {
    const { dispatch } = useSavingsGoalContext();
    const { _id, user } = savingsGoal;

    const deleteSavingsGoal = async () => {
    
        await axios
            .delete("http://localhost:8000/api/goal/delete", {
                params: {
                    _id,
                    user
                },
            })
            .then((res) => {
                console.log("Success: ", res.data);
                dispatch({
                    type: "DELETE_SAVINGS_GOAL",
                    payload: res.data.deletedGoal,
                });
            })
            .catch((err) => {
                console.log("Error: ", err);
            });
    };

    return (
        <button
            onClick={deleteSavingsGoal}
            className="rounded underline font-medium">
            Delete
        </button>
    );
};

export default DeleteGoal;
