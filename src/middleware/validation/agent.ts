import { Request, Response, NextFunction } from 'express';
import { isEmpty } from 'validator';
import { CustomError } from 'utils/response/custom-error/CustomError';

export async function agentBodyCheck(req: Request, res: Response, next: NextFunction): Promise<void> {
  const { first_name, second_name, patronymic, passport, telephone, email, bank_card, salary } = req.body;

  if (isEmpty(first_name || '')) {
    return next(new CustomError(400, 'Raw', `first_name is required.`, null, null));
  }

  if (isEmpty(second_name || '')) {
    return next(new CustomError(400, 'Raw', `second_name is required.`, null, null));
  }

  if (isEmpty(patronymic || '')) {
    return next(new CustomError(400, 'Raw', `patronymic is required.`, null, null));
  }

  if (isEmpty(passport || '')) {
    return next(new CustomError(400, 'Raw', `passport is required.`, null, null));
  }

  if (isEmpty(telephone || '')) {
    return next(new CustomError(400, 'Raw', `telephone is required.`, null, null));
  }

  if (isEmpty(email || '')) {
    return next(new CustomError(400, 'Raw', `email is required.`, null, null));
  }

  if (isEmpty(bank_card || '')) {
    return next(new CustomError(400, 'Raw', `bank_card is required.`, null, null));
  }

  if (isEmpty(salary || '')) {
    return next(new CustomError(400, 'Raw', `salary is required.`, null, null));
  }

  return next();
}