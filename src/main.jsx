import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import TodoContextProvider from "./context/todo-context/todo-context.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <TodoContextProvider>
      <App />
    </TodoContextProvider>
  </BrowserRouter>
);
