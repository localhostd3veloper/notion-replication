import { useEffect, useState } from "react";
import { useTask } from "../context/AppContext";

function TaskDrawer({ currentView, isOpen, setIsOpen }) {
  const taskObject = useTask();

  const currentTask = currentView.tasks.find(
    (task) => task.id === taskObject.taskId
  );
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");

  const handleBlur = () => {
    if (title) {
      taskObject.updateTask(
        taskObject.taskId,
        currentView.id,
        title,
        description
      );
    }
  };

  const handleClose = () => {
    handleBlur();
    setIsOpen(false);
    taskObject.setTaskId(null);
  };

  const handleDelete = () => {
    taskObject.deleteTask(taskObject.taskId, currentView.id);
    setIsOpen(false);
  };
  useEffect(() => {
    if (currentTask) {
      setDescription(currentTask.description);
      setTitle(currentTask.title);
    }
  }, [currentTask]);

  return (
    <>
      {isOpen && (
        <div className="flex w-full z-10 ease-linear transition-all bg-black/30 absolute inset-0 before:opacity-75 after:opacity-100 duration-700">
          <button
            onClick={handleClose}
            className="absolute top-5 right-5 font-semibold text-slate-700 duration-500 border border-slate-600 flex justify-center items-center p-4 w-5 h-5 hover:bg-gray-300 rounded-full"
          >
            X
          </button>
          <div className="w-1/2 bg-black/30" onClick={handleClose}></div>
          <div className="flex flex-col transition-transform duration-500 gap-4 bg-white shadow-md h-screen w-1/2">
            <div className="flex flex-col h-full gap-4 px-16 py-10">
              <div className="text-3xl font-semibold text-slate-600 flex gap-2">
                Task:
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full font-semibold text-slate-600 outline-none"
                  onBlur={handleBlur}
                />
              </div>
              <div className="text-slate-700 font-semibold text-lg h-1/3 flex flex-col gap-3">
                Description: <br />
                <textarea
                  type="text"
                  className="w-full h-2/3 bg-slate-100 p-3 rounded text-slate-700 placeholder:font-normal text-sm outline-none"
                  placeholder="Type something..."
                  autoFocus
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  onBlur={handleBlur}
                />
              </div>
              <div className="flex gap-4 justify-end">
                <button
                  onClick={handleDelete}
                  className="font-semibold text-red-600 border-2 border-red-500 rounded px-3 hover:drop-shadow-lg hover:bg-red-500 hover:text-white duration-500"
                >
                  Remove Task
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default TaskDrawer;
