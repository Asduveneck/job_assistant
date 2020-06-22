import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Profile {
  @PrimaryGeneratedColumn()
  profileId: number;

  @Column({ type: 'json' })
  personalLinks: any; // {name: string url: string}

  @Column({ type: 'json' })
  jobBoardLinks: any; // {name: string url: string}
}

export default Profile;
