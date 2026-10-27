import { Request, Response, NextFunction } from 'express';

import { AgentService } from '../../services/AgentService';
import { AgentDTO } from '../../dto/AgentDTO';

export async function show(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const id = req.params.id;
    const agentService = new AgentService();
    const agent = await agentService.show(Number(id));

    res.json(new AgentDTO(agent));
  } catch (error) {
    next(error);
  }
}
