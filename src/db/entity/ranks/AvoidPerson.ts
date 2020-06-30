import { Entity, PrimaryGeneratedColumn } from 'typeorm';

import { FaveAvoidPerson } from '../helpers';

@Entity({ orderBy: { rank: 'ASC' } })
export default class AvoidPerson extends FaveAvoidPerson {
  @PrimaryGeneratedColumn()
  avoidPersonId: number;
}
