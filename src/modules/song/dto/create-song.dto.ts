import { IsEmpty, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"
import { songType } from "../enums/songType"
import { songLanguages } from "../enums/songLanguages"

export class CreateSongDto {
    @IsString()
    @IsNotEmpty()
    name: string
    @IsString()
    @IsNotEmpty()
    @IsEnum(songType)
    type: string
    rate: string |number
    @IsString()
    @IsNotEmpty()
    description: string
    publishedIn: Date
 
    sources: string
    @IsOptional()
    img: string
    @IsEnum(songLanguages)
    @IsString()
    @IsNotEmpty()
    songLanguages: string
    @IsNotEmpty()

    singerAlbumId: string |number
    @IsNotEmpty()

    singersId: string |number
  
}
