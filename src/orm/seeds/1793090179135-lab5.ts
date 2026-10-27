import {MigrationInterface, QueryRunner} from "typeorm";

import { Role } from '../entities/users/types';
import { User } from '../entities/users/User';

import { Agent } from '../entities/Agent';
import { Task } from '../entities/Task';

export class lab51793090179135 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        const userRepository = queryRunner.manager.getRepository(User);
        const agentRepository = queryRunner.manager.getRepository(Agent);
        const taskRepository = queryRunner.manager.getRepository(Task);

        await queryRunner.query('TRUNCATE TABLE "users" RESTART IDENTITY CASCADE;');
        await queryRunner.query('TRUNCATE TABLE "agents" RESTART IDENTITY CASCADE;');

        let user = new User();
        user.username = 'Heisenberg';
        user.name = 'Walter White';
        user.email = 'admin@admin.com';
        user.password = 'pass1';
        user.hashPassword();
        user.role = 'ADMINISTRATOR' as Role;
        await userRepository.save(user);

        user = new User();
        user.username = 'Jesse';
        user.name = 'Jesse Pinkman';
        user.email = 'standard@standard.com';
        user.password = 'pass1';
        user.hashPassword();
        user.role = 'STANDARD' as Role;
        await userRepository.save(user);

        user = new User();
        user.username = 'Sky';
        user.name = 'Skyler White';
        user.email = 'skyler.white@test.com';
        user.password = 'pass1';
        user.hashPassword();
        await userRepository.save(user);

        user = new User();
        user.username = 'Hank';
        user.name = 'Hank Schrader';
        user.email = 'hank.schrader@test.com';
        user.password = 'pass1';
        user.hashPassword();
        await userRepository.save(user);

        user = new User();
        user.username = 'Marie';
        user.name = 'Marie Schrader';
        user.email = 'marie.schrader@test.com';
        user.password = 'pass1';
        user.hashPassword();
        await userRepository.save(user);

        user = new User();
        user.username = 'The Lawyer';
        user.name = 'Saul Goodman';
        user.email = 'saul.goodman@test.com';
        user.password = 'pass1';
        user.hashPassword();
        await userRepository.save(user);

        user = new User();
        user.username = 'Gus';
        user.name = 'Gustavo Fring';
        user.email = 'gustavo.fring@test.com';
        user.password = 'pass1';
        user.hashPassword();
        await userRepository.save(user);

        user = new User();
        user.username = 'Mike';
        user.name = 'Michael Ehrmantraut';
        user.email = 'michael.ehrmantraut@test.com';
        user.password = 'pass1';
        user.hashPassword();
        await userRepository.save(user);

        user = new User();
        user.username = 'Tio';
        user.name = 'Hector Salamanca';
        user.email = 'hector.salamanca@test.com';
        user.password = 'pass1';
        user.hashPassword();
        await userRepository.save(user);

        user = new User();
        user.username = 'Tuco';
        user.name = 'Alberto Salamanca';
        user.email = 'alberto.salamanca@test.com';
        user.password = 'pass1';
        user.hashPassword();
        await userRepository.save(user);

        // --------------------------- //

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
