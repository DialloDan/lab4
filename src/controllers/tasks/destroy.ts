import { Request, Response } from 'express';

import { TaskService } from '../../services/TaskService';
import { TaskDTO } from '../../dto/TaskDTO';

export async function destroy(req: Request, res: Response): Promise<Response> {
  const id = req.params.id;
  
  const taskService = new TaskService();
  const task = await taskService.destroy(Number(id));

  return res.json(new TaskDTO(task));
}
