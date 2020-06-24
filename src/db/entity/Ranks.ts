import { Entity, PrimaryGeneratedColumn } from 'typeorm';

import { FaveAvoidCompany, FaveAvoidJob, FaveAvoidPerson } from './helpers';

@Entity({ orderBy: { rank: 'ASC' } })
export class FavoriteCompany extends FaveAvoidCompany {
  @PrimaryGeneratedColumn()
  favCompanyId: number;
}

@Entity({ orderBy: { rank: 'ASC' } })
export class AvoidCompany extends FaveAvoidCompany {
  @PrimaryGeneratedColumn()
  avoidCompanyId: number;
}

@Entity({ orderBy: { rank: 'ASC' } })
export class FavoriteJob extends FaveAvoidJob {
  @PrimaryGeneratedColumn()
  favJobId: number;
}

@Entity({ orderBy: { rank: 'ASC' } })
export class InterestedJob extends FaveAvoidJob {
  @PrimaryGeneratedColumn()
  interestedJobId: Number;
}

@Entity({ orderBy: { rank: 'ASC' } })
export class FavoritePerson extends FaveAvoidPerson {
  @PrimaryGeneratedColumn()
  favPersonId: number;
}

@Entity({ orderBy: { rank: 'ASC' } })
export class AvoidPerson extends FaveAvoidPerson {
  @PrimaryGeneratedColumn()
  avoidPersonId: number;
}
