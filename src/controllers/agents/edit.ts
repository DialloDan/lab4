import { Request, Response } from 'express';

import { AgentService } from '../../services/AgentService';
import { AgentDTO } from '../../dto/AgentDTO';

export async function edit(req: Request, res: Response): Promise<Response> {
  const id = req.params.id;

  const agentService = new AgentService();
  const agent = await agentService.edit(Number(id), req.body);

  return res.json(new AgentDTO(agent));
}
