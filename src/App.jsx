import React from "react";
import { FaPlus } from "react-icons/fa6";
import Todo from "./components/todo";
import Done from "./components/done";
import request from "./config/config";


function App() {
  const [todo, setTodo] = React.useState([])
  const [done, setDone] = React.useState([])
  const [currentTodo, setCurrentTodo] = React.useState('')

  const onChangeInput = (e) => {
    setCurrentTodo(e.target.value)
  }

  const fetchData = () => {
    request.get('/todos/find-by?findBy=todo').then((res) => {
      let data = []
      for(let i = res.data.length - 1; i >= 0; i--) {
        data.push(res.data[i])
      }
      setTodo(data)
    })
    .catch(e => console.log(e))
    request.get('/todos/find-by?findBy=done').then((res) => {
      let data = []
      for(let i = res.data.length - 1; i >= 0; i--) {
        data.push(res.data[i])
      }
      setDone(data)
    })
    .catch(e => console.log(e))
  }
  React.useEffect(() => { 
    fetchData()
  }, [])

  const onSubmitForm = (e) => {
    e.preventDefault()
    if(currentTodo){
      request.post('/todos', {title: currentTodo}).then(() => {
        fetchData()
      })
      .catch(e => console.log(e))
    }
    setCurrentTodo('')
  }

  return (<>
    <section className="pt-[200px]">
      <div className="container items-center">
        <form onSubmit={onSubmitForm} className="mx-auto mb-[60px] flex items-center justify-center gap-[11px]">
          <input value={currentTodo} onChange={onChangeInput} className="text-[#ffffff] rounded-[10px] border-[2px] py-[10px] px-[15px] w-[381px] border-[#3E1671]" type="text" placeholder="Add a new task" />
          <button className="text-white bg-[#9E78CF] p-[10px] text-[22px] rounded-[10px]" type="submit"><FaPlus /></button>
        </form>
        <div className="w-[500px] mx-auto mb-[60px]">
          <h2 className="text-white text-[25px] mb-[17px]">Tasks to do - {todo.length}</h2>
          <div className="flex flex-col gap-[16px]">
            {todo.map(item => (
              <Todo title={item.title} id={item._id} key={item._id} fetchData={fetchData} />
            ))}
          </div>
        </div>

        <div className="w-[500px] mx-auto mb-[60px]">
          <h2 className="text-white text-[25px] mb-[17px]">Done - {done.length}</h2>
          <div className="flex flex-col gap-[16px]">
          {done.map(item => (
              <Done title={item.title} id={item._id} key={item._id} fetchData={fetchData} />
            ))}
          </div>
        </div>
      </div>
    </section>
  </>)
}

export default App
