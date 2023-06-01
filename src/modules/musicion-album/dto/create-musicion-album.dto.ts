import { IsNotEmpty, IsOptional, IsString } from "class-validator"

export class CreateMusicionAlbumDto {
    @IsString()
    @IsNotEmpty()
    name: string
    @IsOptional()
  img :string

  @IsNotEmpty()
  MusicionId :number
}
