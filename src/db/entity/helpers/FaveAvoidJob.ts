import { JoinColumn, OneToOne } from 'typeorm';

import Job from '../Job';
import RankHelper from './RankHelper';

export default abstract class FaveAvoidJob extends RankHelper {
  @OneToOne(type => Job)
  @JoinColumn()
  job: Job;
}
