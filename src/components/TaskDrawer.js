import { useEffect, useState } from "react";
import { useTask } from "../context/AppContext";

function TaskDrawer({ currentView, isOpen, setIsOpen }) {
  const { taskId, updateTask, setTaskId, viewItems, deleteTask, changeView } =
    useTask();

  const currentTask = currentView.tasks.find((task) => task.id === taskId);
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleBlur = () => {
    if (title) {
      updateTask(taskId, currentView.id, title, description);
    }
  };

  const handleClose = () => {
    handleBlur();
    setIsOpen(false);
    setTaskId(null);
  };

  const handleDelete = () => {
    deleteTask(taskId, currentView.id);
    setIsOpen(false);
  };

  const handleViewChange = async (viewId) => {
    await changeView(currentTask, currentView.id, Number(viewId));
    setIsOpen(false);
  };

  useEffect(() => {
    if (currentTask) {
      setDescription(currentTask.description);
      setTitle(currentTask.title);
      onkeydown = (e) => {
        if (e.key === "Escape") {
          handleClose();
        }
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTask]);

  return (
    <>
      {isOpen && (
        <div className="flex flex-row-reverse w-full z-10 ease-in-out transition-all bg-black/30 absolute inset-0 before:opacity-75 after:opacity-100 duration-700">
          <div
            className={`
            ${isFullScreen} ? "w-1/2" : "w-0"
             duration-500 bg-black/30`}
            onClick={handleClose}
          ></div>

          <div
            className={`${
              isFullScreen ? "w-full" : "w-1/2"
            } flex flex-col py-3  justify-start duration-500 gap-4 bg-white shadow-md h-screen`}
          >
            <div className="flex justify-between px-4">
              <button
                onClick={() => setIsFullScreen(!isFullScreen)}
                className="text-gray-800"
                title="Full Screen"
              >
                [ + ]
              </button>
              <button
                onClick={handleClose}
                className="font-semibold text-slate-700 duration-500 border border-slate-600 flex justify-center items-center p-4 w-5 h-5 hover:bg-gray-300 rounded-full"
              >
                X
              </button>
            </div>
            <div className="flex flex-col h-full gap-4 px-16 py-10">
              <div>
                Status:{" "}
                <select
                  // value={viewId}
                  defaultValue={currentView.id}
                  onChange={(e) => handleViewChange(e.target.value)}
                  className={`${currentView.color} ml-4 w-1/2 outline-none rounded`}
                  // onBlur={handleViewChange}
                >
                  {viewItems.map((view) => (
                    <option
                      key={view.id}
                      value={view.id}
                      className={`${view.color} px-3`}
                    >
                      {view.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="text-3xl font-semibold text-slate-600 flex gap-2">
                Task:
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full font-semibold text-slate-600 outline-none"
                  onBlur={handleBlur}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleBlur();
                    }
                  }}
                />
              </div>
              <div className="text-slate-700 font-semibold text-lg h-1/3 flex flex-col gap-3">
                Description: <br />
                <textarea
                  className="w-full h-2/3 bg-slate-100 font-normal p-3 rounded text-slate-700 placeholder:font-normal text-sm outline-none"
                  placeholder="Type something..."
                  autoFocus
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  onBlur={handleBlur}
                />
              </div>
              <div className="flex gap-4 justify-end">
                <button
                  onClick={handleClose}
                  className="font-semibold text-blue-600 border-2 border-blue-500 rounded px-3 hover:drop-shadow-lg hover:bg-blue-500 hover:text-white duration-500"
                >
                  Save & Close
                </button>

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
