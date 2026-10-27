import { Request, Response, NextFunction } from "express";

import { TaskService } from '../../services/TaskService';
import { TaskDTO } from '../../dto/TaskDTO';

export async function list(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const taskService = new TaskService();
    const tasks = await taskService.list();

    res.json(TaskDTO.fromMany(tasks));
  } catch (error) {
    next(error);
  }
}
