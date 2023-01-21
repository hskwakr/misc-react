import { capitalize, colors } from '../color';
import { TodoState } from '../redux/features/todos/todosSlice';
import { ReactComponent as TimesSolid } from './TimesSolid.svg';

interface TodoListItemProps {
  todo: TodoState;
  onColorChange: (v: string) => void;
  onCompletedChange: (c: boolean) => void;
  onDelete: () => void;
}

const TodoListItem = ({
  todo,
  onColorChange,
  onCompletedChange,
  onDelete,
}: TodoListItemProps) => {
  const { text, completed, color } = todo;

  const colorOptions = colors.map((c) => (
    <option key={c} value={c}>
      {capitalize(c)}
    </option>
  ));

  return (
    <li>
      <div className="view">
        <div className="segment label">
          <input
            className="toggle"
            type="checkbox"
            checked={completed}
            onChange={(e) => onCompletedChange(e.target.checked)}
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
