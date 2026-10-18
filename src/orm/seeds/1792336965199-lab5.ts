import {MigrationInterface, QueryRunner, getRepository } from "typeorm";

import { Agent } from '../entities/agents/Agent';
import { Task } from '../entities/tasks/Task';

export class lab51792336965199 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        const agentRepository = queryRunner.manager.getRepository(Agent);
        const taskRepository = queryRunner.manager.getRepository(Task);

        await queryRunner.query('TRUNCATE TABLE "agents" RESTART IDENTITY CASCADE;');

        let agent = new Agent();
        agent.first_name = 'Walter';
        agent.second_name = 'White';
        agent.patronymic = 'Heisenberg';
        agent.passport = '4634754835643';
        agent.telephone = '380672708270';
        agent.email = 'admin@admin.com';
        agent.bank_card = '25235634763';
        agent.salary = '1000000';
        await agentRepository.save(agent);

        let task = new Task();
	task.agent = agent;
	task.assignment = 'Producing';
	task.status = 'In progress';
        await taskRepository.save(task);

        task = new Task();
	task.agent = agent;
	task.assignment = 'Recounting';
	task.status = 'In progress';
        await taskRepository.save(task);

	// --------------------------- //

        agent = new Agent();
        agent.first_name = 'Jesse';
        agent.second_name = 'Pinkman';
        agent.patronymic = 'Jess';
        agent.passport = '4624744885643';
        agent.telephone = '380679578270';
        agent.email = 'standard@standard.com';
        agent.bank_card = '25274234763';
        agent.salary = '100000';
        await agentRepository.save(agent);

        task = new Task();
	task.agent = agent;
	task.assignment = 'Working out';
	task.status = 'In progress';
        await taskRepository.save(task);

        task = new Task();
	task.agent = agent;
	task.assignment = 'Producing';
	task.status = 'Done';
        await taskRepository.save(task);

	// --------------------------- //

        agent = new Agent();
        agent.first_name = 'Saul';
        agent.second_name = 'The Lawyer';
        agent.patronymic = 'Goodman';
        agent.passport = '7624673285943';
        agent.telephone = '380629558890';
        agent.email = 'saul.goodman@test.com';
        agent.bank_card = '26275974423';
        agent.salary = '1000000';
        await agentRepository.save(agent);

        task = new Task();
	task.agent = agent;
	task.assignment = 'Relaxing';
	task.status = 'In progress';
        await taskRepository.save(task);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        console.log('Not implemented');
    }

}
