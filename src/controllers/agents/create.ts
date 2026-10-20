import { Request, Response } from 'express';

import { AgentService } from '../../services/AgentService';
import { AgentDTO } from '../../dto/AgentDTO';

export async function create(req: Request, res: Response): Promise<Response> {
  const agentService = new AgentService();
  const agent = await agentService.create(req.body);

  return res.json(new AgentDTO(agent));
}
