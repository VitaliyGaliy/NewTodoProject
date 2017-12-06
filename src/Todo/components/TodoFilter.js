import React from 'react'

const filteredDate = (p) => {
  const dates = p.items.map((p) => p.created_at);
  return Array.from(new Set(dates)).sort();
}

export const TodoFilter = props => {

  const filtered = filteredDate(props)

  return (
    <div className="TodoFilter">
      <h1>Filter by</h1>
      <h2>Filter by</h2>
      <input type="text" onChange={(e) => props.filterByTitle(e.target.value)}/>
      <h2>Date: </h2>
        <select onClick={(e) => props.filterByDate(e.target.value)}>
          <option>all</option>
          {
            filtered.map((f, index) => (
              <option key={index}>{f}</option>
            ))
          }
        </select>
    </div>
  )
}


export default TodoFilter
