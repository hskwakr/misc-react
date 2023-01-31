import { selectCells, useAppSelector } from '../state';
import CellListItem from './cell-list-item';

const CellList = () => {
  const cells = useAppSelector(selectCells);

  const renderedCells = cells.map((cell) =>
    cell != null ? <CellListItem key={cell.id} cell={cell} /> : null
  );

  return <div>{renderedCells}</div>;
};

export default CellList;
