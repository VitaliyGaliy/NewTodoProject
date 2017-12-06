import React from 'react'
import Todo from './Todo'

export const TodosBoard = props => {
  return (
    <div className='TodosBoard'>
      {
        props.currentTodos.map((i, index) => (
          <Todo key={index} {...i} deleteTodo={props.deleteTodo}/>
        ))
      }
    </div>
  )
}


export default TodosBoard
