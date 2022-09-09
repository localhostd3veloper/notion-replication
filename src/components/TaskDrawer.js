import React from "react";
import { useTask } from "../context/AppContext";

function TaskDrawer({ currentView, isOpen, setIsOpen }) {
  const taskObject = useTask();
  return (
    <>
      {isOpen && (
        <div className="flex w-full z-10 ease-linear transition-all bg-black/30 absolute inset-0 before:opacity-75 after:opacity-100 duration-700">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-5 right-5 font-semibold text-slate-700 duration-500 border border-slate-600 flex justify-center items-center p-4 w-5 h-5 hover:bg-gray-300 rounded-full"
          >
            X
          </button>
          <div
            className="w-1/2 bg-black/30"
            onClick={() => setIsOpen(false)}
          ></div>
          <div className="flex flex-col transition-transform duration-500 gap-4 bg-white shadow-md h-screen w-1/2">
            {currentView.tasks.map(
              (task) =>
                task.id === taskObject.taskId && (
                  <div
                    key={task.id}
                    className="flex flex-col gap-4 px-16 py-10"
                  >
                    <div className="text-3xl font-semibold text-slate-600">
                      {task.title}
                    </div>
                    <div className="text-slate-700 text-lg">
                      Description: <br />
                      <input
                        type="text"
                        className="w-full text-slate-700 placeholder:font-normal font-semibold text-sm outline-none"
                        placeholder="Type something..."
                        autoFocus
                        value={task.description}
                        onChange={(e) => {
                          task.description = e.target.value;
                        }}
                      />
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default TaskDrawer;
