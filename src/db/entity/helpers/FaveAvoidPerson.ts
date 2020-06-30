import { JoinColumn, OneToOne } from 'typeorm';

import Person from '../Person';
import RankHelper from './RankHelper';

export default abstract class FaveAvoidPerson extends RankHelper {
  @OneToOne(type => Person)
  @JoinColumn()
  person: Person;
}
