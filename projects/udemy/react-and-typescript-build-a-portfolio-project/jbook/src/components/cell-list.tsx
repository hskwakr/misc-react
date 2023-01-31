import { selectCells, useAppSelector } from '../state';

const CellList = () => {
  const cells = useAppSelector(selectCells);

  console.log(cells);

  return <div>Cell List</div>;
};

export default CellList;
