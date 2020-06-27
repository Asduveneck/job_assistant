import { Column, Generated, JoinColumn, OneToOne } from 'typeorm';

import { ContactHistoryColumn, DetailColumn } from '../types';
import Company from './Company';
import Job from './Job';
import Person from './Person';
import { ContactHistoryColumn, DetailColumn } from '../types';

export abstract class TaskProgressHelper {
  @Column({ nullable: true })
  description: string;

  @Column('timestamp', {
    name: 'date_created',
    default: () => 'LOCALTIMESTAMP',
  })
  dateCreated: string;
}

export abstract class Details {
  @Column({ type: 'json', nullable: true })
  detail: DetailColumn;
}
export abstract class DetailsContactHistory extends Details {
  @Column({ type: 'json', nullable: true })
  contactHistory: ContactHistoryColumn;
}

export abstract class RankHelper {
  @Generated('increment')
  rank: number;
}

export abstract class FaveAvoidCompany extends RankHelper {
  @OneToOne(type => Company)
  @JoinColumn()
  company: Company;
}

export abstract class FaveAvoidJob extends RankHelper {
  @OneToOne(type => Job)
  @JoinColumn()
  job: Job;
}

export abstract class FaveAvoidPerson extends RankHelper {
  @OneToOne(type => Person)
  @JoinColumn()
  person: Person;
}
