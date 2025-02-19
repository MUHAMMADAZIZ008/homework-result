import { useContext } from "react";
import Form from "./components/form/form";
import { TodoContext } from "./context/todo-context/todo-context";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/main-layout";
import TaskList from "./pages/task-list/task-list";

function App() {
  const { data, dispatch } = useContext(TodoContext);

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
      <Route index element={<TaskList />} />
      </Route>
    </Routes>
  );
}

export default App;
