import {
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  Matches,
} from 'class-validator';
//import { MESSAGE, REGEX } from 'src/app.utils';

export class ProfileDto {
  @IsNotEmpty()
  Amount: number;

  @IsNotEmpty()
  First_Name: string;

  @IsOptional()
  Second_Name: string;

  @IsNotEmpty()
  Name: string;

  //@IsNotEmpty()
  //@IsString()
  DOB: string;

  @IsNotEmpty()
  Country_of_birth: string;

  @IsNotEmpty()
  Nationality: string;

  @IsNotEmpty()
  CURP: number;

  @IsNotEmpty()
  RFC: number;

  @IsNotEmpty()
  Phone: number;

  @IsNotEmpty()
  Occupation: string;

  @IsNotEmpty()
  Street: string;

  @IsNotEmpty()
  No_Outside: string;

  @IsOptional()
  No_Inside: string;

  @IsNotEmpty()
  PostalCode: number;

  @IsNotEmpty()
  Colonia: string;

  @IsNotEmpty()
  Municipality: string;

  @IsNotEmpty()
  Status: string;

  // @IsNotEmpty()
  // IDfront: File;

  // @IsNotEmpty()
  // IDback: File;

  // @IsNotEmpty()
  // IDnumber: number;

  // @IsNotEmpty()
  // AddressProof: File;
}
// export const UserRegister = {
//   UserRegisterRequestDto,
// };
