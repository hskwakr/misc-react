import { useAppSelector } from '../state/hooks';
import CellListItem from './cell-list-item';

const CellList = () => {
  const cells = useAppSelector((state) => {
    const { data, order } = state.cells;
    return order.map((id) => data[id]);
  });

  const renderedCells = cells.map((cell) => (
    <CellListItem key={cell.id} cell={cell} />
  ));

  return <div>{renderedCells}</div>;
};

export default CellList;
