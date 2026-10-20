import { Request, Response } from 'express';

import { TaskService } from '../../services/TaskService';
import { TaskDTO } from '../../dto/TaskDTO';

export async function edit(req: Request, res: Response): Promise<Response> {
  const id = req.params.id;
  
  const taskService = new TaskService();
  const task = await taskService.edit(Number(id), req.body);

  return res.json(new TaskDTO(task));
}
