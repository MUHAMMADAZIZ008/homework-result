import React from 'react'
import { MdDone } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";
import { MdOutlineDelete } from "react-icons/md";
import request from '../config/config';


const Todo = ({title, id, fetchData}) => {
  const onClickUpdate = (e) => {
    request.put(`todos/${id}`, {status: 'done'}).then(() => {
      fetchData()
    })
  }
  const onClickDelete = (e) => {
    request.delete(`/todos/${id}`).then(() => {
      fetchData()
    })
  }
  return (
    <div className='px-[21px] flex items-center justify-between py-[22px] rounded-[10px] bg-[#15101c]'>
        <h3 className='text-[#9e78cf] text-[20px]'>{title}</h3>
        <div className='flex gap-[8px]'>
            <button onClick={onClickUpdate} id={id} className='text-[#9E78CF] w-[30px] h-[30px flex items-center justify-center] text-[22px]'><MdDone /></button>
            <button id={id} className='text-[#9E78CF] w-[30px] h-[30px flex items-center justify-center] text-[22px]'><RxUpdate /></button>
            <button onClick={onClickDelete} id={id} className='text-[#9E78CF] w-[30px] h-[30px flex items-center justify-center] text-[22px]'><MdOutlineDelete /></button>
        </div>
    </div>
  )
}

export default Todo