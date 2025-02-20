import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { TodoContext } from "../../context/todo-context/todo-context";
import { todoActions } from "../../context/todo-context/todo-reducer";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";

const Form = ({ defValue }) => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: { title: defValue?.title, des: defValue?.des  } });
  const { data, dispatch } = useContext(TodoContext);

  const submit = (data) => {
    if(!defValue) {
      dispatch({ type: todoActions.ADD_TODO, value: { id: nanoid(), ...data } });
    } else {
      dispatch({type: todoActions.UPDATE_TODO, value: {...data, id: defValue.id}})
    }
    navigate("/");
  };

  return (
    <>
      <form onSubmit={handleSubmit(submit)}>
        <div className="mb-[30px]">
          <input
            className="px-[15px] py-[10px] w-[400px] bg-[#A1E3F9] rounded-[8px] text-[18px] text-[#3674B5] font-semibold"
            placeholder="enter task"
            {...register("title", {
              required: true,
              minLength: { value: 3, message: "Enter at least 3 values" },
            })}
            type="text"
          />
          {errors.title && (
            <p className="text-[18px] text-[red] mt-[10px]">
              {errors.title.message}
            </p>
          )}
        </div>

        <div>
          <input
            className="px-[15px] py-[10px] w-[400px] bg-[#A1E3F9] rounded-[8px] text-[18px] text-[#3674B5]"
            placeholder="enter description"
            {...register("des", {
              required: true,
              minLength: { value: 3, message: "Enter at least 3 values" },
            })}
            type="text"
          />
          {errors.des && (
            <p className="text-[18px] text-[red] mt-[10px]">
              {errors.des.message}
            </p>
          )}
        </div>
        <button className="bg-[#3674B5] text-white mt-[20px] px-[40px] py-[12px] font-bold text-[20px] rounded-[8px]">
          send
        </button>
      </form>
    </>
  );
};

export default Form;
