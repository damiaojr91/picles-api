import { IsEmail, IsNotEmpty, IsNumberString, IsString, Length } from 'class-validator';

export default class updateShelterControllerInput {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumberString()
  @IsNotEmpty()
  @Length(10, 11)
  whatsapp: string;

  @IsNumberString()
  @IsNotEmpty()
  @Length(10, 11)
  phone: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;
}
