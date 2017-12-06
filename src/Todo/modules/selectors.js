import { createSelector } from 'reselect'

export const getFilterByTitle = props => props.todo.titleFilter
export const getFilterByDate = props => props.todo.dateFilter
export const getAllItems = props => props.todo.items
export const getCurrentPage = props => props.todo.currentPage
export const getTodosPerPage = props => props.todo.todosPerPage

export const getItemsByTitle = createSelector(
  [getAllItems, getFilterByTitle],
  (items, filtered) => {

    const filteredByTitle = items.filter((item) => {
      return item.title.toLowerCase().search(
        filtered.toLowerCase()) !== -1;
    })
    return filteredByTitle
  }
)

export const getItems = createSelector(
  [getItemsByTitle, getFilterByDate],
  (title, date) => {
    if (date !== 'all') {
      return title.filter((t) => t.created_at === date)
    } else {
      return title
    }
  }
)

//Логика пагинации

export const getIndexOfLastTodo = createSelector(
  [getCurrentPage, getTodosPerPage],
  (Page, TodosPerPage) => Page * TodosPerPage
)

export const getIndexOfFirstTodo = createSelector(
  [getIndexOfLastTodo, getTodosPerPage],
  (LastTodo, TodosPerPage) => LastTodo - TodosPerPage
)

export const getCurrentTodos = createSelector(
  [getIndexOfFirstTodo, getIndexOfLastTodo, getItems],
  (first, last, q) => q.slice(first, last)
)

export const getPageNumbers = createSelector(
  [getItems, getTodosPerPage],
  (q, todos) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(q.length / todos); i++) {
      pageNumbers.push(i);
    }
    return pageNumbers
  }
)

export default {
  getItems,
  getCurrentPage,
  getIndexOfLastTodo,
  getIndexOfFirstTodo,
  getCurrentTodos,
  getPageNumbers
}
