import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';

import { Task } from 'orm/entities/tasks/Task';
import { CustomError } from 'utils/response/custom-error/CustomError';

export const destroy = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;

  const taskRepository = getRepository(Task);
  try {
    const task = await taskRepository
      .createQueryBuilder('task')
      .leftJoinAndSelect('task.agent', 'agent')
      .where('task.id = :id', { id })
      .getOne();

    if (!task) {
      const customError = new CustomError(404, 'General', 'Not Found', [`Task with id:${id} doesn't exists.`]);
      return next(customError);
    }

    const responseData = {
      id: task.id,
      first_name: task.agent?.first_name ?? null,
      second_name: task.agent?.second_name ?? null,
      assignment: task.assignment,
      status: task.status,
    };

    await taskRepository.delete(id);

    res.customSuccess(200, 'Task successfully deleted.', responseData);
  } catch (err) {
    const customError = new CustomError(400, 'Raw', 'Error', null, err);
    return next(customError);
  }
};
