import { CellTypes } from '../cell';

type Direction = 'up' | 'down';

export interface MoveCell {
  id: string;
  direction: Direction;
}

export interface UpdateCell {
  id: string;
  content: string;
}

export interface DeleteCell {
  id: string;
}

export interface InsertCellBefore {
  id: string;
  type: CellTypes;
}
