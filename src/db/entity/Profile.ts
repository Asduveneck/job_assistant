import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { UrlColumn } from '../types';
@Entity()
class Profile {
  @PrimaryGeneratedColumn()
  profileId: number;

  @Column({ type: 'json' })
  personalLinks: UrlColumn;

  @Column({ type: 'json' })
  jobBoardLinks: UrlColumn;
}

export default Profile;
