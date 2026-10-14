import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';

import { Task } from 'orm/entities/tasks/Task';
import { CustomError } from 'utils/response/custom-error/CustomError';

export const edit = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  const { agent, assignment, status, date, deadline } = req.body;

  const taskRepository = getRepository(Task);
  try {
    const task = await taskRepository.findOne({ where: { id } });

    if (!task) {
      const customError = new CustomError(404, 'General', `Task with id:${id} not found.`, ['Task not found.']);
      return next(customError);
    }

    task.agent = agent;
    task.assignment = assignment;
    task.status = status;
    task.date = date;
    task.deadline = deadline;

    try {
      await taskRepository.save(task);
      res.customSuccess(200, 'Task successfully saved.');
    } catch (err) {
      const customError = new CustomError(409, 'Raw', `Task can't be saved.`, null, err);
      return next(customError);
    }
  } catch (err) {
    const customError = new CustomError(400, 'Raw', 'Error', null, err);
    return next(customError);
  }
};
