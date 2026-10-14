import bcrypt from 'bcryptjs';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('agents')
export class Agent {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  first_name: string;

  @Column({ length: 50 })
  second_name: string;

  @Column({ length: 50 })
  patronymic: string;

  @Column({ length: 50, unique: true })
  passport: string;

  @Column({ length: 50, unique: true })
  telephone: string;

  @Column({ length: 100, unique: true })
  email: string;

  @Column({ length: 50, unique: true })
  bank_card: string;

  @Column()
  salary: string;
}
