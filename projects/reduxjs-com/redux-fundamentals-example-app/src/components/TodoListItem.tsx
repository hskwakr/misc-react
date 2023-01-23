import { shallowEqual } from 'react-redux';
import { capitalize, colors } from '../color';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { ReactComponent as TimesSolid } from './TimesSolid.svg';

interface TodoListItemProps {
  id: number;
}

const TodoListItem = ({ id }: TodoListItemProps) => {
  const dispatch = useAppDispatch();

  const todo = useAppSelector(
    (state) => state.todos.find((todo) => todo.id === id),
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
    dispatch({ type: 'todos/todoToggled', payload: todo.id });
  };

  const onColorChange = (name: string) => {
    dispatch({
      type: 'todos/colorSelected',
      payload: { id: todo.id, color: name },
    });
  };

  const onDelete = () => {
    dispatch({ type: 'todos/todoDeleted', payload: todo.id });
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
