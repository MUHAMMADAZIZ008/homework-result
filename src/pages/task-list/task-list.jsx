import React, { useContext } from "react";
import { TodoContext } from "../../context/todo-context/todo-context";
import bg from "../../assets/images/bg.avif";
const TaskList = () => {
  const { data, dispatch } = useContext(TodoContext);

  return (
    <div className="flex flex-col">
      <div className="bg-[#578FCA] w-full py-[30px] px-[50px]">
        <h1 className="font-bold text-[30px] text-white">Task List</h1>
      </div>
      {data?.todoList?.length ? (
        <div></div>
      ) : (
        <div className="grow-1 w-full flex items-center justify-center">
          <img src={bg} alt="" />
        </div>
      )}
    </div>
  );
};

export default TaskList;
