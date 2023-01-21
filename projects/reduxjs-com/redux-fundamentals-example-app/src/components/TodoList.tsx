import TodoListItem from './TodoListItem';
import { useAppSelector } from '../redux/hooks';

const TodoList = () => {
  const todos = useAppSelector((state) => state.todos);

  const renderedListItems = todos.map((todo) => (
    <TodoListItem
      key={todo.id}
      todo={todo}
      onColorChange={(v: string) => {}}
      onCompletedChange={(c: boolean) => {}}
      onDelete={() => {}}
    />
  ));

  return <ul className="todo-list">{renderedListItems}</ul>;
};

export default TodoList;
