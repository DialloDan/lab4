import { Task } from "orm/entities/Task";

export class TaskDTO {
  id: number;
  first_name: string;
  second_name: string;
  patronymic: string;
  assignment: string;
  status: string;

  constructor(task: Task) {
    this.id = task.id;
    this.first_name = task.agent.first_name;
    this.second_name = task.agent.second_name;
    this.patronymic = task.agent.patronymic;
    this.assignment = task.assignment;
    this.status = task.status;
  }

  static fromMany(tasks: Task[]): TaskDTO[] {
    return tasks.map((task) => new TaskDTO(task));
  }
}