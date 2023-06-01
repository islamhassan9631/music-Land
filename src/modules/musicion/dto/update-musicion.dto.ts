import { PartialType } from '@nestjs/mapped-types';
import { CreateMusicionDto } from './create-musicion.dto';

export class UpdateMusicionDto extends PartialType(CreateMusicionDto) {}
