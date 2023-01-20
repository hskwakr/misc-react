import { useState } from 'react';

const Header = () => {
  const [text, setText] = useState('');

  return (
    <header className="header">
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </header>
  );
};

export default Header;
