import { Request, Response } from 'express';

import { AgentService } from '../../services/AgentService';
import { AgentDTO } from '../../dto/AgentDTO';

export async function destroy(req: Request, res: Response): Promise<Response> {
  const id = req.params.id;

  const agentService = new AgentService();
  const agent = await agentService.destroy(Number(id));

  return res.json(new AgentDTO(agent));
}
