import { Request, Response, NextFunction} from "express";
import { isEmpty, isInt, isISO8601 } from 'validator';
import { CustomError } from 'utils/response/custom-error/CustomError';

export async function taskBodyCheck(req: Request, res: Response, next: NextFunction): Promise<void> {
  const { agent_id, assignment, status, date, deadline } = req.body;

  if (agent_id === undefined || agent_id === null || !isInt(String(agent_id), { min: 1 })) {
    return next(new CustomError(400, 'Raw', `agent_id is required.`, null, null));
  }

  if (isEmpty(assignment || '')) {
    return next(new CustomError(400, 'Raw', `assignment is required.`, null, null));
  }

  if (isEmpty(status || '')) {
    return next(new CustomError(400, 'Raw', `status is required.`, null, null));
  }

  if (date === undefined || !isISO8601(String(date))) {
    return next(new CustomError(400, 'Raw', 'date is required.', null, null));
  }

  if (deadline === undefined || !isISO8601(String(deadline))) {
    return next(new CustomError(400, 'Raw', 'deadline is required.', null, null));
  }

  return next();
}