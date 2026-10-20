import { Agent } from "orm/entities/Agent";

export class AgentDTO {
  id: number;
  first_name: string;
  second_name: string;
  patronymic: string;
  passport: string;
  telephone: string;
  email: string;
  bank_card: string;
  salary: string;

  constructor(agent: Agent) {
    this.id = agent.id;
    this.first_name = agent.first_name;
    this.second_name = agent.second_name;
    this.patronymic = agent.patronymic;
    this.passport = agent.passport;
    this.telephone = agent.telephone;
    this.email = agent.email;
    this.bank_card = agent.bank_card;
    this.salary = agent.salary;
  }

  static fromMany(agents: Agent[]): AgentDTO[] {
    return agents.map((agent) => new AgentDTO(agent));
  }
}