import { Entity, PrimaryGeneratedColumn } from 'typeorm';

import { FaveAvoidJob } from '../helpers';

@Entity({ orderBy: { rank: 'ASC' } })
export default class FavoriteJob extends FaveAvoidJob {
  @PrimaryGeneratedColumn()
  favJobId: number;
}
