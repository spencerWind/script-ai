import GoalForm from "./GoalForm";
import Header from "../script-ui/Header";

const CreateGoalModal = () => {
  return (
      <div
          id="createGoalModal"
          className="fixed top-0 left-0 h-screen w-screen glass-card flex justify-center items-center hidden">
          <div className="p-4 glass-card w-[448px]">
              <div className="flex flex-row pb-4 border-b border-purple-500 items-center justify-between">
                  <Header>Create Goal</Header>
                  <button
                      className="text-red-500 font-black text-2xl"
                      onClick={() => {
                          document
                              .getElementById("createGoalModal")
                              .classList.add("hidden");
                      }}>
                      x
                  </button>
              </div>
              <GoalForm />
          </div>
      </div>
  );
}

export default CreateGoalModal