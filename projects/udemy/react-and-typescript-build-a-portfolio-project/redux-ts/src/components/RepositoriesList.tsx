import { useState } from 'react';
import { useActions } from '../hooks/useActions';

const RepositoriesList = () => {
  const [term, setTerm] = useState('');
  const { searchRepositories } = useActions();

  const onSubmit: React.FormEventHandler = (e) => {
    e.preventDefault();

    searchRepositories(term);
  };

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setTerm(e.target.value);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onChange} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default RepositoriesList;
