import { useState } from "react";

function TaskView({ view }) {
  const [isInputVisible, setIsInputVisible] = useState(false);
  const handleNewTask = () => {
    setIsInputVisible(true);
  };

  return (
    <div className="flex flex-col items-center gap-4 w-48">
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
            className="flex px-3 py-1.5 bg-white drop-shadow-sm rounded w-full cursor-pointer border border-gray-200"
          >
            <div className="text-slate-700 font-semibold text-sm">
              {task.title}
            </div>
          </div>
        ))}
        {isInputVisible && (
          <div className="flex px-3 py-1.5 bg-white drop-shadow-sm rounded w-full cursor-pointer border border-gray-200">
            <input
              type="text"
              className="w-full text-slate-700 placeholder:font-normal font-semibold text-sm outline-none"
              placeholder="Type a name..."
              autoFocus
            />
          </div>
        )}

        <button
          className="text-gray-400 text-left pl-2 text-sm mt-2 cursor-pointer focus:outline-blue-400/80"
          onClick={handleNewTask}
        >
          + New
        </button>
      </div>
    </div>
  );
}

export default TaskView;
