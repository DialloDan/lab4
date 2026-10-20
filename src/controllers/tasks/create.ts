import { Request, Response } from 'express';

import { TaskService } from '../../services/TaskService';
import { TaskDTO } from '../../dto/TaskDTO';

export async function create(req: Request, res: Response): Promise<Response> {
  const taskService = new TaskService();
  const task = await taskService.create(req.body);

  return res.json(new TaskDTO(task));
}
