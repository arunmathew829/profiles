import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';
//import * as bcrypt from 'bcrypt';

@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id: any;

  @Column()
  Amount: number;

  @Column()
  First_Name: string;

  @Column()
  Second_Name: string;

  @Column()
  Name: string;

  // @Column()
  // Gender: string;

  @CreateDateColumn()
  DOB: string;

  @Column()
  Country_of_birth: string;

  @Column()
  Nationality: string;

  @Column()
  CURP: number;

  @Column()
  RFC: number;

  @Column()
  Phone: number;

  @Column()
  Occupation: string;

  @Column()
  Street: string;

  @Column()
  No_Outside: string;

  @Column()
  No_Inside: string;

  @Column()
  PostalCode: number;

  @Column()
  Colonia: string;

  @Column()
  Municipality: string;

  @Column()
  Status: string;

  // @Column()
  // IDfront: File;

  // @Column()
  // IDback: File;

  // @Column()
  // IDnumber: number;

  // @Column()
  // AddressProof: File;
}
