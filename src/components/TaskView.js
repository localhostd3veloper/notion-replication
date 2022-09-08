import { useState } from "react";

import { useTask } from "../context/AppContext";

function TaskView({ view }) {
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const task = useTask();

  const handleNewTask = () => {
    if (inputValue) {
      task.addTask(inputValue, view.id);
      setInputValue("");
    }
    document.getElementById("input").focus();
  };

  return (
    <div id="" className="flex flex-col items-center gap-4 w-48">
      <div className={`flex items-center justify-between w-full font-semibold`}>
        <div className="flex gap-2  text-gray-400">
          <div className={`text-slate-700 px-2 rounded-md ${view.color}`}>
            {view.name}
          </div>
          <div>{view.tasks.length}</div>
        </div>
        <div className=" text-gray-400 cursor-pointer">+</div>
      </div>
      <div className="flex flex-col w-full gap-1.5 flex-nowrap">
        {view.tasks.map((task) => (
          <div
            key={task.id}
            draggable
            className="flex px-3 hover:scale-x-105 hover:bg-gray-100 duration-300 py-1.5 bg-white drop-shadow-sm rounded w-full cursor-pointer border border-gray-200"
          >
            <div className="text-slate-700 font-semibold text-sm">
              {task.title}
            </div>
          </div>
        ))}
        {isInputVisible && (
          <div className="flex px-3 py-1.5 bg-white drop-shadow-sm rounded w-full cursor-pointer border border-gray-200">
            <input
              id="input"
              type="text"
              className="w-full text-slate-700 placeholder:font-normal font-semibold text-sm outline-none"
              placeholder="Type a name..."
              autoFocus
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleNewTask();
                }
              }}
              onBlur={() => {
                setIsInputVisible(false);
              }}
            />
          </div>
        )}

        <button
          className="text-gray-400 text-left pl-2 text-sm mt-2 cursor-pointer focus:outline-blue-400/80"
          onClick={() => setIsInputVisible(true)}
        >
          + New
        </button>
      </div>
    </div>
  );
}

export default TaskView;
