import { useState } from "react";

const example = {
  firstName: "Jane",
  lastName: "Jacobs",
};

export default function EditProfile1() {
  const [firstName, setFirstName] = useState(example.firstName);
  const [lastName, setLastName] = useState(example.lastName);
  const [isEdit, setIsEdit] = useState(false);

  const fullName = firstName + " " + lastName;

  const handleEdit = (e) => {
    e.preventDefault();
    setIsEdit(!isEdit);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  if (isEdit) {
    return (
      <form>
        <label>
          First name: <input onChange={handleFirstNameChange} />
        </label>
        <label>
          Last name: <input onChange={handleLastNameChange} />
        </label>
        <button type="submit" onClick={handleEdit}>
          Save Profile
        </button>
        <p>
          <i>Hello, {fullName}!</i>
        </p>
      </form>
    );
  }
  return (
    <form>
      <label>
        First name: <b>{firstName}</b>
      </label>
      <label>
        Last name: <b>{lastName}</b>
      </label>
      <button type="submit" onClick={handleEdit}>
        Edit Profile
      </button>
      <p>
        <i>Hello, {fullName}!</i>
      </p>
    </form>
  );
}
