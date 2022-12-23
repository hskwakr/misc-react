import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actionCreators } from '../state';

const RepositoriesList = () => {
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();

  const onSubmit: React.FormEventHandler = (e) => {
    e.preventDefault();

    dispatch(actionCreators.searchRepositories(term) as any);
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
