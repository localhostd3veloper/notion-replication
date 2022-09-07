import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import TaskView from "./TaskView";

function HomePage() {
  const { viewItems } = useContext(AppContext);

  return (
    <div className="h-screen bg-gray-50 flex flex-col px-10 pt-5 gap-16">
      <div className="text-base md:text-2xl lg:text-4xl font-semibold text-slate-700">
        Welcome to your <br /> new task manager!
      </div>
      <div className="flex justify-center gap-4">
        {viewItems.map((view) => (
          <TaskView key={view.id} view={view} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
