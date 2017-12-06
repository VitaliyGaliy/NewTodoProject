import { connect } from 'react-redux'
import { actions } from '../modules/actions'
import todos from '../modules/selectors'
import { TodoWrapper } from '../components/TodoWrapper'

const mapActionCreators = {
  ...actions,
}

const mapStateToProps = (state) => {
  return{
    items: todos.getItems(state),
    currentPage: todos.getCurrentPage(state),
    currentTodos: todos.getCurrentTodos(state),
    pageNumbers: todos.getPageNumbers(state)
  }}

export default connect(mapStateToProps, mapActionCreators)(TodoWrapper)
