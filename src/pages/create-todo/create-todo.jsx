import React from "react";
import Form from "../../components/form/form";
import { useNavigate } from "react-router-dom";

const CreateTodo = () => {
  const router = useNavigate();
  const backFn = () => {
    router(-1)
  }
  return (
    <div>
      <div className="bg-[#578FCA] w-full py-[30px] px-[50px]">
        <h1 className="font-bold text-[30px] text-white">Create Task</h1>
      </div>
      <div className="pl-[50px] pt-[30px]">
        <button onClick={backFn} className="bg-[#009990] px-[25px] text-white font-semibold rounded-[8px] py-[15px]">Go back</button>
      </div>
      <div className="pl-[50px] pt-[70px]">
        <Form />
      </div>
    </div>
  );
};

export default CreateTodo;
