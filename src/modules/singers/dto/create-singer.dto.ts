import { IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { ArtistType } from "../dto/enums/type";

export class CreateSingerDto {
  @IsString()
  @IsNotEmpty()
  name: string
  @IsString()
  @IsNotEmpty()
  info: string
  @IsOptional()
  img: string
  @IsString()
  @IsNotEmpty()
  nationality: string
  @IsString()
  @IsNotEmpty()
  @IsEnum(ArtistType)
  type: string
}

