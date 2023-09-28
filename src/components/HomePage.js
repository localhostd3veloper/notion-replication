import React from "react";
import { useTask } from "../context/AppContext";
import TaskView from "./TaskView";

function HomePage() {
  const task = useTask();

  const [newViewName, setNewViewName] = React.useState("");
  const [isNewViewInputOpen, setIsNewViewInputOpen] = React.useState(false);

  const createNewView = () => {
    task.addView(newViewName);
    setNewViewName("");
    setIsNewViewInputOpen(false);
  };

  return (
    <div className="h-screen bg-gray-50 flex flex-col px-10 pt-10 gap-16">
      <div className="text-base md:text-2xl lg:text-4xl font-semibold text-slate-600 first-letter:px-2 first-letter:mr-1 first-letter:shadow-md  first-letter:bg-white">
        <span className="tracking-widest"> Notion:</span> One workspace. Every
        team.
      </div>
      <div className="flex gap-4 flex-nowrap overflow-x-scroll h-full px-5">
        {task.viewItems.map((view) => (
          <TaskView key={view.id} view={view} viewId={view.id} />
        ))}
        <div>
          {isNewViewInputOpen ? (
            <input
              type="text"
              value={newViewName}
              onChange={(e) => setNewViewName(e.target.value)}
              className="text-slate-700 px-2 rounded-md bg-orange-300/20 focus:outline-none font-semibold text-sm"
              onKeyDown={(e) =>
                e.key === "Enter" && newViewName && createNewView()
              }
              autoFocus
              onBlur={() => setIsNewViewInputOpen(false)}
            />
          ) : (
            <button
              className="font-semibold text-gray-400 cursor-pointer min-w-[200px]"
              onClick={() => setIsNewViewInputOpen(true)}
            >
              + New View
            </button>
          )}
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
