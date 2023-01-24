import { capitalize, colors } from '../color';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { ReactComponent as TimesSolid } from './TimesSolid.svg';
import {
  selectTodoById,
  todoColorSelected,
  todoDeleted,
  todoToggled,
} from '../redux/features/todos/todosSlice';
import { shallowEqual } from 'react-redux';

interface TodoListItemProps {
  id: number;
}

const TodoListItem = ({ id }: TodoListItemProps) => {
  const dispatch = useAppDispatch();

  const todo = useAppSelector(
    (state) => selectTodoById(state, id),
    shallowEqual
  );
  if (!todo) {
    return <></>;
  }

  const { text, completed, color } = todo;

  const colorOptions = colors.map((c) => (
    <option key={c} value={c}>
      {capitalize(c)}
    </option>
  ));

  const onCompletedChange = () => {
    dispatch(todoToggled(todo.id));
  };

  const onColorChange = (name: string) => {
    dispatch(todoColorSelected(todo.id, name));
  };

  const onDelete = () => {
    dispatch(todoDeleted(todo.id));
  };

  return (
    <li>
      <div className="view">
        <div className="segment label">
          <input
            className="toggle"
            type="checkbox"
            checked={completed}
            onChange={() => onCompletedChange()}
          />
          <div className="todo-text">{text}</div>
        </div>
        <div className="segment buttons">
          <select
            className="colorPicker"
            value={color}
            style={{ color }}
            onChange={(e) => onColorChange(e.target.value)}
          >
            <option value=""></option>
            {colorOptions}
          </select>
          <button className="destroy" onClick={onDelete}>
            <TimesSolid />
          </button>
        </div>
      </div>
    </li>
  );
};

export default TodoListItem;
