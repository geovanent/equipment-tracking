import { IsString, Length, IsNotEmpty, IsOptional } from 'class-validator';
export class CreateEquipmentDto {
  @IsString()
  @IsNotEmpty({ message: 'Equipment name is required.' })
  @Length(3, 255, {
    message: 'Equipment name must be between 3 and 255 characters.',
  })
  name: string;

  @IsString()
  @IsNotEmpty({ message: 'Equipment type is required.' })
  type: string;

  @IsString()
  @IsNotEmpty({ message: 'Equipment status is required.' })
  status: string;

  @IsString()
  @IsOptional()
  @Length(1, 255, {
    message: 'Location must be between 1 and 255 characters.',
  })
  location?: string;

  @IsString()
  @IsOptional()
  @Length(1, 255, {
    message: 'Job ID must be between 1 and 255 characters.',
  })
  jobId?: string;
}
