import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [tasks] = useState([
    {
      id: 1,
      title: "Task 1",
      description: "Description 1",
    },
    {
      id: 2,
      title: "Task 2",
      description: "Description 2",
    },
    {
      id: 3,
      title: "Task 3",
      description: "Description 3",
    },
    {
      id: 4,
      title: "Task 4",
      description: "Description 4",
    },
  ]);

  const [viewItems] = useState([
    { name: "Not started", id: 1, color: "bg-red-300/20", tasks: tasks },
    { name: "To Do", id: 2, color: "bg-blue-300/20", tasks: tasks },
    { name: "In progress", id: 3, color: "bg-yellow-300/20", tasks: tasks },
    { name: "Done", id: 4, color: "bg-green-300/20", tasks: tasks },
  ]);

  return (
    <AppContext.Provider value={{ viewItems }}>{children}</AppContext.Provider>
  );
};