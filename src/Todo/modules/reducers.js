// import _ from 'lodash'
// import { arr, obj } from '../../../modules/utils'
// ------------------------------------
// Constants
// ------------------------------------
import { consts } from './consts'
// ------------------------------------
// Initial State
// ------------------------------------
import { initial } from './initial'
// ------------------------------------
// Action Handlers
// ------------------------------------
export const actionHandlers = {

  [consts.ADD_ITEM]: (state, action) => {
    return { ...state, items:[...state.items, {...action.payload}]
  }},

  [consts.DELETE_ITEM]: (state, action) => {
    const newItemsArray = state.items.filter(i => {if (i.id !== action.payload) return i})
      return { ...state, items: newItemsArray}
  },

  [consts.FILTER_BY_TITLE]: (state, action) => ({ ...state, titleFilter:action.payload }),
  [consts.FILTER_BY_DATE]: (state, action) => ({ ...state, dateFilter:action.payload }),

  [consts.SET_PAGE]: (state, action) => ({ ...state, ...action.payload }),
  [consts.SET_BUTTONPAGE]: (state, action) => ({ ...state, ...action.payload }),

}

export const reducers = (state = initial, action) => {
  const handler = actionHandlers[action.type]
  return handler ? handler(state, action) : state
}

export default reducers
