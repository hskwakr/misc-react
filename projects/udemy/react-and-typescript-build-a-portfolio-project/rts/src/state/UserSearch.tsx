import { useState } from 'react';

const users = [
  { name: 'Sarah', age: 18 },
  { name: 'Alex', age: 20 },
  { name: 'Michael', age: 22 },
];

const UserSearch = () => {
  const [name, setName] = useState('');
  const [foundUsers, setFoundUsers] = useState<typeof users>([]);

  const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setName(e.target.value);
  };

  const onClickHandler = () => {
    const found = users.filter((u) => name !== '' && u.name.includes(name));
    setFoundUsers(found);
  };

  const searchResult =
    foundUsers.length > 0 ? (
      <ul>
        {foundUsers.map((user) => (
          <li key={user.name}>
            {user.name} {user.age}
          </li>
        ))}
      </ul>
    ) : (
      <p>User Not Found</p>
    );

  return (
    <div>
      <h3>User Search</h3>
      <div>
        <input type="text" onChange={onChangeHandler} value={name} />
        <button type="button" onClick={onClickHandler}>
          Find User
        </button>
      </div>
      {searchResult}
    </div>
  );
};

export default UserSearch;
