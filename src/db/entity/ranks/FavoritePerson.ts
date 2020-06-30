import { Entity, PrimaryGeneratedColumn } from 'typeorm';

import { FaveAvoidPerson } from '../helpers';

@Entity({ orderBy: { rank: 'ASC' } })
export class FavoritePerson extends FaveAvoidPerson {
  @PrimaryGeneratedColumn()
  favPersonId: number;
}
