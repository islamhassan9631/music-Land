import { PartialType } from '@nestjs/mapped-types';
import { CreateFavoreteDto } from './create-favorete.dto';

export class UpdateFavoreteDto extends PartialType(CreateFavoreteDto) {}
