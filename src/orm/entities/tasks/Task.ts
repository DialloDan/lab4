import bcrypt from 'bcryptjs';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';

import { Agent } from "./../agents/Agent"

@Entity('tasks')
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Agent)
  agent: Agent;

  @Column()
  assignment: string;

  @Column()
  status: string;

  @Column()
  @CreateDateColumn()
  date: Date;

  @Column()
  @UpdateDateColumn()
  deadline: Date;
}
