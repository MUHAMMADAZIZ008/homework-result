import React from 'react'
import { MdOutlineDelete } from 'react-icons/md'
import request from '../config/config'

const Done = ({title, id, fetchData}) => {
  const onClickDelete = (e) => {
    request.delete(`/todos/${id}`).then(() => {
      fetchData()
    })
  }
  return (
    <div className='px-[21px] flex items-center justify-between py-[22px] rounded-[10px] bg-[#15101c]'>
        <h3 className='line-through text-[#78CFB0] text-[20px]'>{title}</h3>
        <button onClick={onClickDelete} id={id} className='text-[#9E78CF] w-[30px] h-[30px flex items-center justify-center] text-[22px]'><MdOutlineDelete /></button>
    </div>
  )
}

export default Done