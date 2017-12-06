import { createStore, combineReducers, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import Todo from '../src/Todo/modules'

const initialReducers = {
  [Todo.consts.KEY]: (state = Todo.initial) => state,
}

export default createStore(
  combineReducers({
    form: formReducer,
    ...initialReducers,
    [Todo.consts.KEY]: Todo.reducers,
  }),
  applyMiddleware(
    ReduxThunk
  )
)
