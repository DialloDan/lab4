import { Request, Response, NextFunction } from 'express';

import { AgentService } from '../../services/AgentService';
import { AgentDTO } from '../../dto/AgentDTO';

export async function create(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const agentService = new AgentService();
    const agent = await agentService.create(req.body);

    res.json(new AgentDTO(agent));
  } catch (error) {
    next(error);
  }
}
