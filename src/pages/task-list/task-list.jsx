import React, { useContext } from "react";
import { TodoContext } from "../../context/todo-context/todo-context";
import bg from "../../assets/images/bg.avif";
import TodoCard from "../../components/todo-card/todo-card";
const TaskList = () => {
  const { data, dispatch } = useContext(TodoContext);
  const todos = []
  for(let i = data.todoList.length - 1; i >= 0; i--) {
    todos.push(data.todoList[i])
  }
  return (
    <div className="flex flex-col">
      <div className="bg-[#578FCA] w-full py-[30px] px-[50px]">
        <h1 className="font-bold text-[30px] text-white">Task List</h1>
      </div>
      {data?.todoList?.length ? (
        <div className="pt-[50px] px-[50px] grow-1">
          {todos.map(item => (
            <TodoCard key={item.id} id={item.id} title={item.title} des={item.des} />
          ))}
        </div>
      ) : (
        <div className="grow-1 w-full flex items-center justify-center">
          <img src={bg} alt="" />
        </div>
      )}
    </div>
  );
};

export default TaskList;
