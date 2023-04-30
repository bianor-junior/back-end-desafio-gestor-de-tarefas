import {Column, Entity, Index, JoinColumn, ManyToOne, PrimaryColumn} from 'typeorm';
import {ITaskDTO, IPriority, IStatus} from '../components/task/DTO/ITaskDTO';
import { User } from './User';
import { IUserDTO } from '../components/user/DTO/IUserDTO';


@Entity('tasks')
export  class Task implements ITaskDTO{
@PrimaryColumn()
@Index()
  id: string;
@Column()
  task: string;
@Column({
  type: 'enum',
  enum: IPriority
})
  priority: IPriority;
@Column({
  type: 'enum',
  enum: IStatus
})
  status: IStatus;
@Column()
  creationDate: string;
@ManyToOne(() => User, user => user.id)
@JoinColumn({name: 'id_user'})
  idUser: IUserDTO[];
}