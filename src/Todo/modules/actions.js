import { consts } from './consts'

// ------------------------------------
// Actions
// ------------------------------------

export const addTodo = i => (dispatch, getState) => {
  return dispatch({ type: consts.ADD_ITEM, payload: i})
}

export const deleteTodo = id => (dispatch, getState) => {
  return dispatch({ type: consts.DELETE_ITEM, payload: id})
}

export const filterByTitle = t => (dispatch, getState) => {
  return dispatch({ type: consts.FILTER_BY_TITLE, payload: t})
}

export const filterByDate = d => (dispatch, getState) => {
  return dispatch({ type: consts.FILTER_BY_DATE, payload: d})
}

export const setPagination = p => (dispatch, getState) => {
  return dispatch({ type: consts.SET_PAGE, payload: p })
}

export const setButtonPage = p => (dispatch, getState) => {
  return dispatch({ type: consts.SET_BUTTONPAGE, payload: p })
}


export const actions = {
  addTodo,
  deleteTodo,
  filterByTitle,
  setPagination,
  setButtonPage,
  filterByDate,
}

export default actions
