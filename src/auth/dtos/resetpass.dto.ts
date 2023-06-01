import {  IsNotEmpty, IsString} from "class-validator";

export class ResetPassDto {
    @IsString()
  @IsNotEmpty()
  password: string
  @IsString()
  @IsNotEmpty()
  passwordConfirm:string
}