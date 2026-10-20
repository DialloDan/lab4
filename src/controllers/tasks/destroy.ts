import { Request, Response, NextFunction } from 'express';

import { TaskService } from '../../services/TaskService';
import { TaskDTO } from '../../dto/TaskDTO';

export async function destroy(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const id = req.params.id;
    const taskService = new TaskService();
    const task = await taskService.destroy(Number(id));

    res.json(new TaskDTO(task));
  } catch (error) {
    next(error);
  }
}
