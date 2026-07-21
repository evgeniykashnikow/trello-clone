import { prisma } from './prisma.js';

// Single-user app: one implicit board. Create it on first access.
export async function getDefaultBoardId(): Promise<string> {
  const existing = await prisma.board.findFirst();
  if (existing) return existing.id;
  const created = await prisma.board.create({ data: {} });
  return created.id;
}
