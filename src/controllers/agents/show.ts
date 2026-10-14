import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';

import { Agent } from 'orm/entities/agents/Agent';
import { CustomError } from 'utils/response/custom-error/CustomError';

export const show = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;

  const agentRepository = getRepository(Agent);
  try {
    const agent = await agentRepository
      .createQueryBuilder('agent')
      .getOne();

    if (!agent) {
      const customError = new CustomError(404, 'General', `Agent with id:${id} not found.`, ['Agent not found.']);
      return next(customError);
    }
    res.customSuccess(200, 'Agent found', agent);
  } catch (err) {
    const customError = new CustomError(400, 'Raw', 'Error', null, err);
    return next(customError);
  }
};
