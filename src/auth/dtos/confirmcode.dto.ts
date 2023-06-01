import { IsEmail, IsNotEmpty, IsOptional} from "class-validator";

export class ConformCodeDto {
  @IsNotEmpty()
  code: string;
}