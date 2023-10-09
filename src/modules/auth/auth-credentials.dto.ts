import { IsString, MinLength, MaxLength, Matches } from 'class-validator';

export class AuthCredentialsDto {
  @IsString()
  @MinLength(4)
  email: string;

  @IsString()
  @MinLength(8)
  @MaxLength(32)
  // Regex to validate the password (uppercase letters, lowercase letters, numbers, etc.)
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,32}$/,
    {
      message:
        'The password must contain at least one uppercase letter, one lowercase letter, one number and one special character.',
    },
  )
  password: string;
}
