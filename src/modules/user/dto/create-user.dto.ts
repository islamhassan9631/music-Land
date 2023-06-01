import { IsEmail, IsEnum, IsNotEmpty, IsString, MinLength } from "class-validator"
import { Role } from "./eunm.role"

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
@IsEmail()

    email :string  
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    name : string
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    password: string
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    salt: string
    @IsString()
    @IsNotEmpty()
  @IsEnum(Role)
    role:string
}
