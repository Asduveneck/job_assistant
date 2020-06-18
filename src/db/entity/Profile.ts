import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  profileId: number;

  @Column({ type: 'json' })
  settings: any; // FINDME: plan this out?

  @Column({ type: 'json' })
  personalLinks: any;

  @Column({ type: 'json' })
  jobBoardLinks: any;

  @Column({ type: 'json' })
  templates: any; // specify main categories... then arrays within...
}

export default Profile;
