import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MusicionAlbumService } from './musicion-album.service';
import { CreateMusicionAlbumDto } from './dto/create-musicion-album.dto';
import { UpdateMusicionAlbumDto } from './dto/update-musicion-album.dto';

@Controller('musicion-album')
export class MusicionAlbumController {
  constructor(private readonly musicionAlbumService: MusicionAlbumService) {}

  @Post()
  create(@Body() createMusicionAlbumDto: CreateMusicionAlbumDto) {
    return this.musicionAlbumService.create(createMusicionAlbumDto);
  }

  @Get()
  findAll() {
    return this.musicionAlbumService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.musicionAlbumService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMusicionAlbumDto: UpdateMusicionAlbumDto) {
    return this.musicionAlbumService.update(+id, updateMusicionAlbumDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.musicionAlbumService.remove(+id);
  }
}
