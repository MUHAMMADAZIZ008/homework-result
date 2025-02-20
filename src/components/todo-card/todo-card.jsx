import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TodoContext } from "../../context/todo-context/todo-context";
import { todoActions } from "../../context/todo-context/todo-reducer";

const TodoCard = ({ id, title, des }) => {
  const { data, dispatch } = useContext(TodoContext);
  const navigate = useNavigate();
  const updateTodoList = () => {
    navigate(`/update-todo/${id}`);
  };
  const deleteTodo = () => {
    dispatch({ type: todoActions.DELETE_TODO, value: { id } });
    navigate('/')
  };
  return (
    <div className="flex mb-[15px] justify-between items-center rounded-[8px] bg-[#211C6A] px-[20px] py-[15px]">
      <div>
        <h3 className="text-white font-black text-3xl">{title}</h3>
        <p className="text-white text-[18px]">{des}</p>
      </div>
      <div className="flex items-center gap-[10px]">
        <button
          className="bg-green-500 py-[10px] rounded-[8px] text-white font-semibold px-[20px]"
          onClick={updateTodoList}
          id={id}
        >
          Update
        </button>
        <button
          className="bg-red-500 py-[10px] rounded-[8px] text-white font-semibold px-[20px]"
          onClick={deleteTodo}
          id={id}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
