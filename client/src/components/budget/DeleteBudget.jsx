import axios from "axios";
import { useBudgetContext } from "../../hooks/useBudgetContext";

const DeleteBudget = ({ budget }) => {

    const {dispatch} = useBudgetContext()
    const {_id, user} = budget

    const deleteBudgetItem = async () => {
                await axios
                    .delete("http://localhost:8000/api/budget/delete", {
                        params: {
                            _id,
                            user,
                        },
                    })
                    .then((res) => {
                        console.log("Success: ", res.data);
                        dispatch({
                            type: "DELETE_BUDGET",
                            payload: res.data.deletedBudget,
                        });
                    })
                    .catch((err) => {
                        console.log("Error: ", err);
                    });
    }

    return (
        <button onClick={deleteBudgetItem} className="h-8 rounded border-2 px-2 text-red-600">
            Delete
        </button>
    );
};

export default DeleteBudget;
