import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';

import { FaveAvoidCompany, FaveAvoidJob, FaveAvoidPerson } from './helpers';

export class FavoriteCompany extends FaveAvoidCompany {
  @PrimaryGeneratedColumn()
  favCompanyId: number;
}
export class AvoidCompany extends FaveAvoidCompany {
  @PrimaryGeneratedColumn()
  avoidCompanyId: number;
}

export class FavoriteJob extends FaveAvoidJob {
  @PrimaryGeneratedColumn()
  favJobId: number;
}

export class FavoritePerson extends FaveAvoidPerson {
  @PrimaryGeneratedColumn()
  favPersonId: number;
}
export class AvoidPerson extends FaveAvoidPerson {
  @PrimaryGeneratedColumn()
  avoidPersonId: number;
}
