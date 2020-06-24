import { Column, Generated, OneToOne, JoinColumn } from 'typeorm';
import Company from './Company';
import Job from './Job';
import Person from './Person';

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
  details: any; // plan this out?
}
export abstract class DetailsContactHistory extends Details {
  @Column({ type: 'json', nullable: true })
  contactHistory: any; // {date: 'timestamp' note:'text'}
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
