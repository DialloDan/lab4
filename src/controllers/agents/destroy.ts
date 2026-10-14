import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';

import { Agent } from 'orm/entities/agents/Agent';
import { CustomError } from 'utils/response/custom-error/CustomError';

export const destroy = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;

  const agentRepository = getRepository(Agent);
  try {
    const agent = await agentRepository
      .createQueryBuilder('agent')
      .where('agent.id = :id', { id })
      .getOne();

    if (!agent) {
      const customError = new CustomError(404, 'General', 'Not Found', [`Agent with id:${id} doesn't exists.`]);
      return next(customError);
    }
    agentRepository.delete(id);

    res.customSuccess(200, 'Agent successfully deleted.', { id: agent.id, first_name: agent.first_name, second_name: agent.second_name, email: agent.email });
  } catch (err) {
    const customError = new CustomError(400, 'Raw', 'Error', null, err);
    return next(customError);
  }
};
