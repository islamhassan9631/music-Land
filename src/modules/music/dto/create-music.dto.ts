import { IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator"
import { musicType } from "./eunms/musicType"
import { songLanguages } from "src/modules/song/enums/songLanguages"

export class CreateMusicDto {
    @IsString()
    @IsNotEmpty()
    name: string
    @IsString()
    @IsNotEmpty()
    @IsEnum(musicType)
    type: string
    rate: number |string
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

    MusicionId: number |string
    @IsNotEmpty()

    musicionAlbumId: number |string
}
