import { Request, Response } from "express";

import { TaskService } from '../../services/TaskService';
import { TaskDTO } from '../../dto/TaskDTO';

export async function list(req: Request, res: Response): Promise<Response> {
  const taskService = new TaskService();
  const tasks = await taskService.list();

  return res.json(TaskDTO.fromMany(tasks));
}
