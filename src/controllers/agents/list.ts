import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';

import { Agent } from 'orm/entities/agents/Agent';
import { CustomError } from 'utils/response/custom-error/CustomError';

export const list = async (req: Request, res: Response, next: NextFunction) => {
  const agentRepository = getRepository(Agent);
  try {
    const agents = await agentRepository
      .createQueryBuilder('agent')
      .getMany();

    res.customSuccess(200, 'List of agents.', agents);
  } catch (err) {
    const customError = new CustomError(400, 'Raw', `Can't retrieve list of agents.`, null, err);
    return next(customError);
  }
};
