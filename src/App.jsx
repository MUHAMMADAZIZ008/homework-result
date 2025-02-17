import React from "react";
import { FaPlus } from "react-icons/fa6";
import Todo from "./components/todo";
import Done from "./components/done";


function App() {
  const [todo, setTodo] = React.useState([])
  const [done, setDone] = React.useState([])
  const [currentTodo, setCurrentTodo] = React.useState('')

  return (<>
    <section className="pt-[200px]">
      <div className="container items-center">
        <form className="mx-auto mb-[60px] flex items-center justify-center gap-[11px]">
          <input className="text-[#ffffff] rounded-[10px] border-[2px] py-[10px] px-[15px] w-[381px] border-[#3E1671]" type="text" placeholder="Add a new task" />
          <button className="text-white bg-[#9E78CF] p-[10px] text-[22px] rounded-[10px]" type="submit"><FaPlus /></button>
        </form>
        <div className="w-[500px] mx-auto mb-[60px]">
          <h2 className="text-white text-[25px] mb-[17px]">Tasks to do - 4</h2>
          <div className="flex flex-col gap-[16px]">
          </div>
        </div>

        <div className="w-[500px] mx-auto mb-[60px]">
          <h2 className="text-white text-[25px] mb-[17px]">Done - 1</h2>
          <div className="flex flex-col gap-[16px]">
          </div>
        </div>
      </div>
    </section>
  </>)
}

export default App
