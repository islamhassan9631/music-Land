import { PartialType } from '@nestjs/mapped-types';
import { CreateMusicionAlbumDto } from './create-musicion-album.dto';

export class UpdateMusicionAlbumDto extends PartialType(CreateMusicionAlbumDto) {}
