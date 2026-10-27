import { Request, Response, NextFunction } from 'express';

import { AgentService } from '../../services/AgentService';
import { AgentDTO } from '../../dto/AgentDTO';

export async function edit(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const id = req.params.id;
    const agentService = new AgentService();
    const agent = await agentService.edit(Number(id), req.body);

    res.json(new AgentDTO(agent));
  } catch (error) {
    next(error);
  }
}
