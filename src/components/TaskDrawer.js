import React, { useEffect } from "react";

function TaskDrawer({ currentView, isOpen, setIsOpen, taskObject }) {
  useEffect(() => {
    // console.log({ currentView, isOpen, setIsOpen, taskId: task?.taskId });
    // currentView.tasks.map((task) => {
    //   console.log(task,task.task);
    // });
  }, []);

  return (
    <>
      {isOpen && (
        <div className="flex w-full  bg-black/30 absolute inset-0 before:opacity-75 after:opacity-100 duration-700">
          <div
            className="w-1/2 bg-black/30"
            onClick={() => setIsOpen(false)}
          ></div>
          <div
            className="flex flex-col items-center transition-transform duration-500 gap-4 bg-white shadow-md h-screen w-1/2"
            onBlur={() => setIsOpen(false)}
          >
            {currentView.tasks.map(
              (task) =>
                task.id === taskObject.taskId && (
                  <div
                    key={task.id}
                    className="flex flex-col items-center justify-center w-full h-full"
                  >
                    {task.title}
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
