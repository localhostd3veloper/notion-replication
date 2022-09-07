import React from "react";

function TaskView({ view }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className={`flex items-center justify-between w-48 font-semibold`}>
        <div className="flex gap-2 text-gray-400">
          <div className={`text-slate-700 px-2 rounded-md ${view.color}`}>
            {view.name}
          </div>
          <div>{view.tasks.length}</div>
        </div>
        <div className=" text-gray-400 cursor-pointer">+</div>
      </div>
      {view.tasks.map((task) => (
        <div
          key={task.id}
          className="flex w-48 gap-5 px-3 py-1 bg-white shadow rounded"
        >
          <div className="text-slate-700 font-semibold">{task.title}</div>
        </div>
      ))}
    </div>
  );
}

export default TaskView;
