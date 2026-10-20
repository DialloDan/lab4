import { Request, Response, NextFunction } from "express";

import { TaskService } from '../../services/TaskService';
import { TaskDTO } from '../../dto/TaskDTO';

export async function create(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const taskService = new TaskService();
    const task = await taskService.create(req.body);

    res.json(new TaskDTO(task));
  } catch (error) {
    next(error);
  }
}
