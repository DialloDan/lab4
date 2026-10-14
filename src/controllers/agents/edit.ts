import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';

import { Agent } from 'orm/entities/agents/Agent';
import { CustomError } from 'utils/response/custom-error/CustomError';

export const edit = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  const { first_name, second_name, patronymic, passport, telephone, email, bank_card, salary } = req.body;

  const agentRepository = getRepository(Agent);
  try {
    const agent = await agentRepository
      .createQueryBuilder('agent')
      .where('agent.id = :id', { id })
      .getOne();

    if (!agent) {
      const customError = new CustomError(404, 'General', `Agent with id:${id} not found.`, ['Agent not found.']);
      return next(customError);
    }

    agent.first_name = first_name;
    agent.second_name = second_name;
    agent.patronymic = patronymic;
    agent.passport = passport;
    agent.telephone = telephone;
    agent.email = email;
    agent.bank_card = bank_card;
    agent.salary = salary;

    try {
      await agentRepository.save(agent);
      res.customSuccess(200, 'Agent successfully saved.');
    } catch (err) {
      const customError = new CustomError(409, 'Raw', `Agent can't be saved.`, null, err);
      return next(customError);
    }
  } catch (err) {
    const customError = new CustomError(400, 'Raw', 'Error', null, err);
    return next(customError);
  }
};
