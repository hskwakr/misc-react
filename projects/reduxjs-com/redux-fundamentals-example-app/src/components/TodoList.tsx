import { TodoState } from '../features/todos/todosSlice';
import TodoListItem from './TodoListItem';

const TodoList = () => {
  const todos: TodoState[] = [];

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
