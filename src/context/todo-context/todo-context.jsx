import React from "react";
import { todoReducer } from "./todo-reducer";

const initialState = {
  todoList: [],
};

export const TodoContext = React.createContext({});

const TodoContextProvider = ({ children }) => {
  const [data, dispatch] = React.useReducer(todoReducer, initialState);
  return (
    <TodoContext.Provider value={{ data, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
