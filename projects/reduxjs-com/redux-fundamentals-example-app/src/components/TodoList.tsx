import TodoListItem from './TodoListItem';
import { useAppSelector } from '../redux/hooks';
import { selectFilteredTodoIds } from '../redux/features/todos/todosSlice';

const TodoList = () => {
  const todoIds = useAppSelector(selectFilteredTodoIds);

  const renderedListItems = todoIds.map((id) => (
    <TodoListItem key={id} id={id} />
  ));

  return <ul className="todo-list">{renderedListItems}</ul>;
};

export default TodoList;
