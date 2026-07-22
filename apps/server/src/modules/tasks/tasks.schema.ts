import { z } from 'zod';

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

export type CreateTaskInput = z.infer<typeof createTaskSchema>;
export type UpdateTaskInput = z.infer<typeof updateTaskSchema>;
