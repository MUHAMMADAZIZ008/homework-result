import { useContext } from "react";
import Form from "./components/form/form";
import { TodoContext } from "./context/todo-context/todo-context";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/main-layout";
import TaskList from "./pages/task-list/task-list";
import CreateTodo from "./pages/create-todo/create-todo";
import UpdateTodo from "./pages/update-todo/update-todo";

function App() {
  const { data, dispatch } = useContext(TodoContext);

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<TaskList />} />
        <Route path="/create-todo" element={<CreateTodo />} />
        <Route path="/update-todo/:id" element={<UpdateTodo />} />
      </Route>
    </Routes>
  );
}

export default App;
