import { Request, Response } from "express";

import { AgentService } from '../../services/AgentService';
import { AgentDTO } from '../../dto/AgentDTO';

export async function list(req: Request, res: Response): Promise<Response> {
  const agentService = new AgentService();
  const agents = await agentService.list();

  return res.json(AgentDTO.fromMany(agents));
}
