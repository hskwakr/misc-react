import { CellTypes } from '../cell';

export interface MoveCell {
  id: string;
  direction: 'up' | 'down';
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
