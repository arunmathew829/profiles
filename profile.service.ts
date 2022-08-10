import { Injectable } from '@nestjs/common';
import { Profile } from './entity/profile.entity';
import { ProfileDto } from './dto/profile.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(Profile)
    private profileRepository: Repository<Profile>,
  ) {}

  async createProfile(profileDto: ProfileDto) {
    const {
      Amount,
      First_Name,
      Second_Name,
      Name,
      DOB,
      Country_of_birth,
      Nationality,
      CURP,
      RFC,
      Phone,
      Occupation,
      Street,
      No_Outside,
      No_Inside,
      PostalCode,
      Colonia,
      Municipality,
      Status,
    } = profileDto;

    const profile = new Profile();
    profile.Amount = Amount;
    profile.First_Name = First_Name;
    profile.Second_Name = Second_Name;
    profile.Name = Name;
    profile.DOB = DOB;
    profile.Country_of_birth = Country_of_birth;
    profile.Nationality = Nationality;
    profile.CURP = CURP;
    profile.RFC = RFC;
    profile.Phone = Phone;
    profile.Occupation = Occupation;
    profile.Street = Street;
    profile.No_Inside = No_Inside;
    profile.No_Outside = No_Outside;
    profile.PostalCode = PostalCode;
    profile.Colonia = Colonia;
    profile.Municipality = Municipality;
    profile.Status = Status;

    //const data =
    await this.profileRepository.save(profile);
    //     if (data) {
    //       return { code: 200, msg: 'success' };
    //     } else {
    //       return { msg: 'failed,data not stored' };
    //     }
    //   }
  }
}
