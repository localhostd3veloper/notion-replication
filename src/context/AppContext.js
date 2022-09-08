import React, { createContext, useState, useContext } from "react";

export const AppContext = createContext();

export function useTask() {
  return useContext(AppContext);
}

export const AppProvider = ({ children }) => {
  // const [tasks] = useState([
  //   {
  //     id: 1,
  //     title: "Task 1",
  //     description: "Description 1",
  //   },
  //   {
  //     id: 2,
  //     title: "Task 2",
  //     description: "Description 2",
  //   },
  //   {
  //     id: 3,
  //     title: "Task 3",
  //     description: "Description 3",
  //   },
  //   {
  //     id: 4,
  //     title: "Task 4",
  //     description: "Description 4",
  //   },
  // ]);

  const [viewItems, setViewItems] = useState([
    { name: "Not started", id: 1, color: "bg-red-300/20", tasks: [] },
    {
      name: "To Do",
      id: 2,
      color: "bg-blue-300/20",
      tasks: [
        // {
        //   id: 1,
        //   title: "Task 1",
        //   description: "Description 1",
        // },
        // {
        //   id: 2,
        //   title: "Task 2",
        //   description: "Description 2",
        // },
      ],
    },
    { name: "In progress", id: 3, color: "bg-yellow-300/20", tasks: [] },
    {
      name: "Done",
      id: 4,
      color: "bg-green-300/20",
      tasks: [
        // {
        //   id: 5,
        //   title: "Task 5",
        //   description: "Description 5",
        // },
      ],
    },
  ]);

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
  };
  const addView = (name) => {
    const newView = {
      name,
      id: Math.floor(Math.random() * 10000),
      color: "bg-orange-300/20",
      tasks: [],
    };
    setViewItems([...viewItems, newView]);
  };

  const value = {
    viewItems,
    addTask,
    addView,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
