import React from "react";

function TaskView({ view }) {
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
            className="flex px-3 py-2 bg-white shadow rounded w-full"
          >
            <div className="text-slate-700 font-semibold">{task.title}</div>
          </div>
        ))}
        <div className="text-gray-400 text-sm mt-2">+ New</div>
      </div>
    </div>
  );
}

export default TaskView;
