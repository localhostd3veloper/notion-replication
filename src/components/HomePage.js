import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

function HomePage() {
  const { tasks, views } = useContext(AppContext);

  return (
    <div className="h-screen bg-gray-100 flex flex-col px-10 pt-5 gap-16">
      <div className="text-base md:text-2xl lg:text-4xl font-semibold text-slate-700">
        Welcome to your <br /> new task manager!
      </div>
      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-5 justify-center">
          {views.map((view) => (
            <div
              key={view.id}
              className={`flex items-center justify-between w-48 font-semibold`}
            >
              <div className="flex gap-2 text-gray-400">
                <div className={`text-slate-700 px-2 rounded-md ${view.color}`}>
                  {view.name}
                </div>
                <div>0</div>
              </div>
              <div className=" text-gray-400">+</div>
            </div>
          ))}
        </div>
        <div className="flex gap-5">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="flex w-48 gap-5 px-3 py-1 bg-white shadow rounded"
            >
              <div className="text-slate-700 font-semibold">{task.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
