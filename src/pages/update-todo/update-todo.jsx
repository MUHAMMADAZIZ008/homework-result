import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TodoContext } from "../../context/todo-context/todo-context";
import Form from "../../components/form/form";

const UpdateTodo = () => {
  const { id } = useParams();
  const {data, dispatch} = useContext(TodoContext)
  const defValue = data.todoList.find((item) => item.id === id)
  const router = useNavigate();
  const backFn = () => {
    router(-1)
  }
  return (
    <div>
      <div className="bg-[#578FCA] w-full py-[30px] px-[50px]">
        <h1 className="font-bold text-[30px] text-white">Update Task</h1>
      </div>
      <div className="pl-[50px] pt-[30px]">
        <button onClick={backFn} className="bg-[#009990] px-[25px] text-white font-semibold rounded-[8px] py-[15px]">Go back</button>
      </div>
      <div className="pl-[50px] pt-[70px]">
        <Form defValue={defValue}/>
      </div>
    </div>
  );
};

export default UpdateTodo;
