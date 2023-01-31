import { Cell } from '../state/cell';

interface CellListItemProps {
  cell: Cell;
}

const CellListItem = ({ cell }: CellListItemProps) => <div>{cell.id}</div>;

export default CellListItem;
