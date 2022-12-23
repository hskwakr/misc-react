import { useState } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const RepositoriesList = () => {
  const [term, setTerm] = useState('');
  const { searchRepositories } = useActions();
  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories
  );

  const onSubmit: React.FormEventHandler = (e) => {
    e.preventDefault();

    searchRepositories(term);
    // console.log(data, error, loading);
  };

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setTerm(e.target.value);
  };

  const errorContent = error !== null && <h3>{error}</h3>;
  const loadingContent = loading && <h3>Loading...</h3>;
  const dataContent =
    error === null && !loading && data.map((name) => <div>{name}</div>);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onChange} />
        <button type="submit">Search</button>
      </form>
      {errorContent}
      {loadingContent}
      {dataContent}
    </div>
  );
};

export default RepositoriesList;
