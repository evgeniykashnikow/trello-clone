import type { Board } from '@trello/shared';
import { getBoard } from './board.service.js';

export async function getBoardHandler(): Promise<Board> {
  return getBoard();
}
