import { useState } from 'react';
import { useAppDispatch } from '../redux/hooks';
import { todoAdded } from '../redux/features/todos/todosSlice';

const Header = () => {
  const dispatch = useAppDispatch();
  const [text, setText] = useState('');
  const [lastId, setLastId] = useState(0);

  return (
    <header className="header">
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={text}
        autoFocus={true}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          const trimmed = e.currentTarget.value.trim();

          // If the user pressed the Enter key:
          if (e.key === 'Enter' && trimmed) {
            // Dispatch the "todo added" action with this text
            dispatch(
              todoAdded({
                id: lastId,
                text: trimmed,
                completed: false,
              })
            );

            // And clear out the text input
            setText('');
            setLastId((prev) => prev + 1);
          }
        }}
      />
    </header>
  );
};

export default Header;
