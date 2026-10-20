import { IsInt, IsNotEmpty, IsString, Max, MaxLength, Min } from 'class-validator';

export class UpdateReservationDto {
  
  @IsString()
  @IsNotEmpty()
  @MaxLength(80)
  purpose!: string;

  @IsInt()
  @Min(1)
  @Max(20)
  participants!: number;

  @Min(1)
  roomId!: number;
}
