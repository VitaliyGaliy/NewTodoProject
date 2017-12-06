import React from 'react'
import Form from './Form'
import TodoList from './TodoList'
import Pagination from './Pagination'

export const TodoWrapper = (props) => {
  return (
    <div className='TodoWrapper' >
      <Form {...props}/>
      <TodoList {...props}/>
      <Pagination {...props}/>
    </div>
  )
}

export default TodoWrapper
