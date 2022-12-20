import { useState } from 'react';

const GuestList = () => {
  const [name, setName] = useState('');
  const [guests, setGuests] = useState<typeof name[]>([]);

  const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setName(e.target.value);
  };

  const onClickHandler = () => {
    setName('');
    setGuests((preGuests) => [...preGuests, name]);
  };

  return (
    <div>
      <h3>Guest List</h3>

      <ul>
        {guests.map((guest) => (
          <li key={guest}>{guest}</li>
        ))}
      </ul>

      <input type="text" value={name} onChange={onChangeHandler} />
      <button type="button" onClick={onClickHandler}>
        {' '}
        Add Guest
      </button>
    </div>
  );
};

export default GuestList;
