import { z } from 'zod';

export const createColumnSchema = z.object({ title: z.string().min(1) });
export const updateColumnSchema = z.object({ title: z.string().min(1) });

export const createTaskSchema = z.object({
  columnId: z.string().min(1),
  title: z.string().min(1),
});

export const updateTaskSchema = z.object({
  title: z.string().min(1).optional(),
  description: z.string().optional(),
  columnId: z.string().min(1).optional(),
  position: z.number().int().optional(),
});
