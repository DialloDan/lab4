import { getRepository } from 'typeorm';
import { Task } from "orm/entities/Task";
import { Agent } from "orm/entities/Agent";
import { CustomError } from "utils/response/custom-error/CustomError";

class TaskService {
  private taskRepository = getRepository(Task);
  private agentRepository = getRepository(Agent);

  async create(taskData: { agent_id: number; assignment: string; status: string; date: string; deadline: string }): Promise<Task> {
    const agent = await this.agentRepository.findOne({ where: { id: taskData.agent_id } });

    if (!agent) {
      throw new CustomError(409, 'Raw', `Task agent with id:${taskData.agent_id} not found.`, null, null)
    }

    const realData = {
      agent: agent,
      assignment: taskData.assignment,
      status: taskData.status,
      date: new Date(taskData.date),
      deadline: new Date(taskData.deadline)
    }

    const task = this.taskRepository.create(realData);

    await this.taskRepository.save(task);

    return task;
  }

  async list(): Promise<Task[]> {
    return await this.taskRepository.find({ relations: ['agent'] });
  }

  async show(id: number): Promise<Task> {
    const task = await this.taskRepository.findOne({ where: { id }, relations: ['agent'] });

    if (!task) {
      throw new CustomError(409, 'Raw', `Task with id:${id} not found.`, null, null)
    }

    return task;
  }

  async edit(id: number, taskData: { agent_id: number; assignment: string; status: string; date: string; deadline: string }): Promise<Task> {
    const task = await this.taskRepository.findOne({ where: { id } });

    if (!task) {
      throw new CustomError(409, 'Raw', `Task with id:${id} not found.`, null, null)
    }

    const agent = await this.agentRepository.findOne({ where: { id: taskData.agent_id } });

    if (!agent) {
      throw new CustomError(409, 'Raw', `Task agent with id:${taskData.agent_id} not found.`, null, null)
    }

    task.agent = agent;
    task.assignment = taskData.assignment;
    task.status = taskData.status;
    task.date = new Date(taskData.date);
    task.deadline = new Date(taskData.deadline);

    await this.taskRepository.save(task);

    return task;
  }

  async destroy(id: number): Promise<Task> {
    const task = await this.taskRepository.findOne({ where: { id }, relations: ['agent'] });

    if (!task) {
      throw new CustomError(409, 'Raw', `Task with id:${id} not found.`, null, null)
    }

    await this.taskRepository.delete(id);

    return task;
  }
}

export { TaskService };