import React from 'react'

export const Todo = props => {
  return (
    <div className='Todo'>
      <span className='Delete' onClick={() => props.deleteTodo(props.id)}>X</span>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <h2>{`Date: ${props.created_at}`}</h2>
    </div>
  )
}


export default Todo
