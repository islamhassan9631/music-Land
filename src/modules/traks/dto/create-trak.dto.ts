import { IsNumber, IsOptional, IsString } from "class-validator"

export class CreateTrakDto {
    @IsString()
    title: string
   
    link :string
    @IsNumber()
    playlistId :number
    @IsNumber()
    @IsOptional()
    favoritelistId:number
    @IsNumber()
    @IsOptional()
    songId:number
    @IsNumber()
    @IsOptional()
    musicId:number
}
