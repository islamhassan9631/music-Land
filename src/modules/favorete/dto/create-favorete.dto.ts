import { IsNumber } from "class-validator";

export class CreateFavoreteDto {
    @IsNumber()
    profileId:number
}
