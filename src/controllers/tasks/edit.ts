import { Request, Response, NextFunction } from "express";

import { TaskService } from '../../services/TaskService';
import { TaskDTO } from '../../dto/TaskDTO';

export async function edit(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const id = req.params.id;
    const taskService = new TaskService();
    const task = await taskService.edit(Number(id), req.body);

    res.json(new TaskDTO(task));
  } catch (error) {
    next(error);
  }
}
