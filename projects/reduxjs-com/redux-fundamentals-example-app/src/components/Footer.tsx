import { Color, colors as availableColors, capitalize } from '../color';
import {
  Status,
  StatusFilters,
  colorFilterChanged,
  statusFilterChanged,
} from '../redux/features/filters/filtersSlice';
import {
  selectTodos,
  todoAllCompleted,
  todoCompletedCleared,
} from '../redux/features/todos/todosSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

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
    const value = Object.values(StatusFilters).find((v) => {
      const keyword = v[0].toUpperCase() + v.slice(1);
      return keyword === key;
    });

    const handleClick = () => {
      value && onChange(value);
    };

    const className = value === status ? 'selected' : '';

    return (
      <li key={key}>
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
  const dispatch = useAppDispatch();
  const { status, colors } = useAppSelector((state) => state.filters);

  const todosRemaining = useAppSelector((state) => {
    const uncompletedTodos = selectTodos(state).filter(
      (todo) => !todo.completed
    );
    return uncompletedTodos.length;
  });

  const onColorChange: OnColorChangeHandler = (color, changeType) => {
    dispatch(colorFilterChanged(color, changeType));
  };

  const onStatusChange: OnStatusChangeHandler = (status) => {
    dispatch(statusFilterChanged(status));
  };

  const onAllCompleted = () => {
    dispatch(todoAllCompleted());
  };

  const onCompletedCleared = () => {
    dispatch(todoCompletedCleared());
  };

  return (
    <footer className="footer">
      <div className="actions">
        <h5>Actions</h5>
        <button className="button" onClick={onAllCompleted}>
          Mark All Completed
        </button>
        <button className="button" onClick={onCompletedCleared}>
          Clear Completed
        </button>
      </div>

      <RemainingTodos count={todosRemaining} />
      <StatusFilter value={status} onChange={onStatusChange} />
      <ColorFilters value={colors} onChange={onColorChange} />
    </footer>
  );
};

export default Footer;
