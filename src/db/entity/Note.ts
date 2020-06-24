import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Note {
  @PrimaryGeneratedColumn()
  noteId: number;

  @Column({ type: 'varchar', length: 2500 })
  coverLetter: string;

  @Column({ type: 'varchar', length: 2500 })
  email: string;

  @Column({ type: 'varchar', length: 2500 })
  jobApps: string;

  @Column({ type: 'varchar', length: 2500 })
  misc: string;
}

export default Note;
