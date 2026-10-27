import { Request, Response, NextFunction } from "express";

import { AgentService } from '../../services/AgentService';
import { AgentDTO } from '../../dto/AgentDTO';

export async function list(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const agentService = new AgentService();
    const agents = await agentService.list();

    res.json(AgentDTO.fromMany(agents));
  } catch (error) {
    next(error);
  }
}
