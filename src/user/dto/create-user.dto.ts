import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  auth0_id: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
}
