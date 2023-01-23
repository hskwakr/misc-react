import TodoListItem from './TodoListItem';
import { useAppSelector } from '../redux/hooks';

const TodoList = () => {
  const todoIds = useAppSelector((state) => state.todos.map((todo) => todo.id));

  const renderedListItems = todoIds.map((id) => (
    <TodoListItem key={id} id={id} />
  ));

  return <ul className="todo-list">{renderedListItems}</ul>;
};

export default TodoList;
