import React, { createContext, useState, useContext, useEffect } from "react";

export const AppContext = createContext();

export function useTask() {
  return useContext(AppContext);
}

export const AppProvider = ({ children }) => {
  const [viewItems, setViewItems] = useState([
    {
      name: "Not started",
      id: 1,
      color: "bg-red-300/20",
      tasks: [
        {
          title: "Technical Interview",
          id: 1,
          description: "Interview with the technical team",
        },
        {
          title: "Call with the CEO",
          id: 2,
          description: "Call with the CEO of the company",
        },
      ],
    },
    {
      name: "To Do",
      id: 2,
      color: "bg-blue-300/20",
      tasks: [
        {
          title: "Review This Assignment",
          id: 2,
          description: "Review this assignment and select the best candidate",
        },
      ],
    },
    {
      name: "In progress",
      id: 3,
      color: "bg-yellow-300/20",
      tasks: [
        {
          title: "Drag and Drop",
          id: 3,
          description: "Drag and Drop functionality",
        },
      ],
    },
    {
      name: "Done",
      id: 4,
      color: "bg-green-300/20",
      tasks: [
        {
          title: "Apply for the job",
          id: 4,
          description: "Apply for the job",
        },
        {
          title: "Message the recruiter",
          id: 5,
          description: "Message the recruiter",
        },
        {
          title: "Send the CV",
          id: 6,
          description: "Send the CV",
        },
        {
          title: "Introductory call",
          id: 7,
          description: "Introductory call",
        },
      ],
    },
  ]);
  const [taskId, setTaskId] = useState(null);

  useEffect(() => {
    if (isCachePresent()) {
      const cache = JSON.parse(localStorage.getItem("viewItems"));
      setViewItems(cache);
    }
  }, []);

  const isCachePresent = () => {
    const data = localStorage.getItem("viewItems");
    if (data) {
      return true;
    }
    return false;
  };

  const storeCache = (data) => {
    localStorage.setItem("viewItems", JSON.stringify(data));
  };

  const addTask = (title, viewId) => {
    const newTask = {
      id: Math.floor(Math.random() * 10000),
      title,
      description: "",
    };

    const newViewItems = viewItems.map((view) =>
      view.id === viewId ? { ...view, tasks: [...view.tasks, newTask] } : view
    );
    setViewItems(newViewItems);
    storeCache(newViewItems);
  };

  const addView = (name) => {
    const newView = {
      name,
      id: Math.floor(Math.random() * 10000),
      color: "bg-orange-300/20",
      tasks: [],
    };
    setViewItems([...viewItems, newView]);
    storeCache([...viewItems, newView]);
  };

  const deleteTask = (taskId, viewId) => {
    const newViewItems = viewItems.map((view) =>
      view.id === viewId
        ? {
            ...view,
            tasks: view.tasks.filter((task) => task.id !== taskId),
          }
        : view
    );
    setViewItems(newViewItems);
    storeCache(newViewItems);
  };

  const updateTask = (taskId, viewId, title, description) => {
    const newViewItems = viewItems.map((view) =>
      view.id === viewId
        ? {
            ...view,
            tasks: view.tasks.map((task) =>
              task.id === taskId ? { ...task, title, description } : { ...task }
            ),
          }
        : view
    );
    setViewItems(newViewItems);
    storeCache(newViewItems);
  };

  const changeView = (currentTask, fromViewId, toViewId) => {
    // console.log({ currentTask, fromViewId, toViewId });
    const newTask = {
      id: Math.floor(Math.random() * 10000),
      title: currentTask.title,
      description: currentTask.description,
    };

    const newViewItems = viewItems.map((view) =>
      view.id === Number(toViewId)
        ? { ...view, tasks: [...view.tasks, newTask] }
        : view
    );
    setViewItems(newViewItems);
    // remove task from previous view
    const newViewItems2 = newViewItems.map((view) =>
      view.id === Number(fromViewId)
        ? {
            ...view,
            tasks: view.tasks.filter((task) => task.id !== currentTask.id),
          }
        : view
    );
    setViewItems(newViewItems2);
    storeCache(newViewItems2);
    // deleteTask(currentTask.id, fromViewId);
  };

  const value = {
    viewItems,
    addTask,
    addView,
    setTaskId,
    taskId,
    deleteTask,
    updateTask,
    changeView,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
