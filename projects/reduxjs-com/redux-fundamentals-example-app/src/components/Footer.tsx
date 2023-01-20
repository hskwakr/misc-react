import {
  Color,
  capitalize,
  colors as availableColors,
} from '../features/Color';
import { Status, StatusFilters } from '../features/filters/filtersSlice';

type OnColorChangeHandler = (
  color: Color,
  changeType: 'removed' | 'added'
) => void;

type OnStatusChangeHandler = (status: Status) => void;

interface RemainingTodosProps {
  count: number;
}

const RemainingTodos = ({ count }: RemainingTodosProps) => {
  const suffix = count === 1 ? '' : 's';

  return (
    <div className="todo-count">
      <h5>Remaining Todos</h5>
      <strong>{count}</strong> item{suffix} left
    </div>
  );
};

interface StatusFilterProps {
  value: Status;
  onChange: OnStatusChangeHandler;
}

const StatusFilter = ({ value: status, onChange }: StatusFilterProps) => {
  const renderedFilters = Object.keys(StatusFilters).map((key) => {
    const value = key as Status;
    const handleClick = () => onChange(value);
    const className = value === status ? 'selected' : '';

    return (
      <li key={value}>
        <button className={className} onClick={handleClick}>
          {key}
        </button>
      </li>
    );
  });

  return (
    <div className="filters statusFilters">
      <h5>Filter by Status</h5>
      <ul>{renderedFilters}</ul>
    </div>
  );
};

interface ColorFiltersProps {
  value: Color[];
  onChange: OnColorChangeHandler;
}

const ColorFilters = ({ value: colors, onChange }: ColorFiltersProps) => {
  const renderedColors = availableColors.map((color) => {
    const checked = colors.includes(color);

    const handleChange = () => {
      const changeType = checked ? 'removed' : 'added';
      onChange(color, changeType);
    };

    return (
      <label key={color}>
        <input
          type="checkbox"
          name={color}
          checked={checked}
          onChange={handleChange}
        />
        <span
          className="color-block"
          style={{
            backgroundColor: color,
          }}
        ></span>
        {capitalize(color)}
      </label>
    );
  });

  return (
    <div className="filters colorFilters">
      <h5>Filter by Color</h5>
      <form className="colorSelection">{renderedColors}</form>
    </div>
  );
};

const Footer = () => {
  const colors: Color[] = [];
  const status = StatusFilters.All;
  const todosRemaining = 1;

  const onColorChange: OnColorChangeHandler = (color, changeType) =>
    console.log('Color change: ', { color, changeType });

  const onStatusChange: OnStatusChangeHandler = (status) =>
    console.log('Status change: ', status);

  return (
    <footer className="footer">
      <div className="actions">
        <h5>Actions</h5>
        <button className="button">Mark All Completed</button>
        <button className="button">Clear Completed</button>
      </div>

      <RemainingTodos count={todosRemaining} />
      <StatusFilter value={status} onChange={onStatusChange} />
      <ColorFilters value={colors} onChange={onColorChange} />
    </footer>
  );
};

export default Footer;
