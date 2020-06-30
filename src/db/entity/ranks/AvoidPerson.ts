import { Entity, PrimaryGeneratedColumn } from 'typeorm';

import { FaveAvoidPerson } from '../helpers';

@Entity({ orderBy: { rank: 'ASC' } })
export class AvoidPerson extends FaveAvoidPerson {
  @PrimaryGeneratedColumn()
  avoidPersonId: number;
}
