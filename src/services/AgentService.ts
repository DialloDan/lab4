import { getRepository } from 'typeorm';
import { Agent } from "orm/entities/Agent";
import { Task } from "orm/entities/Task";

class AgentService {
  private taskRepository = getRepository(Task);
  private agentRepository = getRepository(Agent);

  async create(agentData: { first_name: string; second_name: string; patronymic: string; passport: string; telephone: string; email: string; bank_card: string; salary: string }): Promise<Agent> {
    const agent = this.agentRepository.create(agentData);

    await this.agentRepository.save(agent);

    return agent;
  }

  async list(): Promise<Agent[]> {
    return await this.agentRepository.find();
  }

  async show(id: number): Promise<Agent> {
    const agent = await this.agentRepository.findOne({ where: { id } });

    if (!agent) {
      throw new Error(`Agent with id:${id} not found.`);
    }

    return agent;
  }

  async edit(id: number, agentData: { first_name: string; second_name: string; patronymic: string; passport: string; telephone: string; email: string; bank_card: string; salary: string }): Promise<Agent> {
    const agent = await this.agentRepository.findOne({ where: { id } });

    if (!agent) {
      throw new Error(`Agent with id:${id} not found.`);
    }

    agent.first_name = agentData.first_name;
    agent.second_name = agentData.second_name;
    agent.patronymic = agentData.patronymic;
    agent.passport = agentData.passport;
    agent.telephone = agentData.telephone;
    agent.email = agentData.email;
    agent.bank_card = agentData.bank_card;
    agent.salary = agentData.salary;

    await this.agentRepository.save(agent);

    return agent;
  }

  async destroy(id: number): Promise<Agent> {
    const agent = await this.agentRepository.findOne({ where: { id } });

    if (!agent) {
      throw new Error(`Agent with id:${id} not found.`);
    }

    await this.taskRepository.delete({ agent: { id } });

    await this.agentRepository.delete(id);

    return agent;
  }
}

export { AgentService };