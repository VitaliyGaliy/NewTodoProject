import React from 'react'
import TodoFilter from './TodoFilter'
import TodosBoard from './TodosBoard'

export const TodoList = (props) => {
  return (
    <div className='TodoList' >
      <TodoFilter {...props}/>
      <TodosBoard {...props}/>
    </div>
  )
}

export default TodoList
