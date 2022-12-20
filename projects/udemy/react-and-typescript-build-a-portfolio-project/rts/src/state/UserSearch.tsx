import { useState } from 'react';

const users = [
  { name: 'Sarah', age: 18 },
  { name: 'Alex', age: 20 },
  { name: 'Michael', age: 22 },
];

const UserSearch = () => {
  const [name, setName] = useState('');

  const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setName(e.target.value);
  };

  const onClickHandler = () => {
    const found = users.filter((u) => u.name.includes(name));
    console.log(found);
  };

  return (
    <div>
      <h3>User Search</h3>
      <div>
        <input type="text" onChange={onChangeHandler} value={name} />
        <button type="button" onClick={onClickHandler}>
          Find User
        </button>
      </div>
    </div>
  );
};

export default UserSearch;
