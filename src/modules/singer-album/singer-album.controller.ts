import { Controller, Get, Post, Body, Patch, Param, Delete, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { SingerAlbumService } from './singer-album.service';
import { CreateSingerAlbumDto } from './dto/create-singer-album.dto';
import { UpdateSingerAlbumDto } from './dto/update-singer-album.dto';
import { MyMulter } from 'src/commens/classes/storgehelper';
import { FileInterceptor } from '@nestjs/platform-express';
export const storage = {
  storage: MyMulter.Storage('./uploads/singerAlbumimages')
};
@Controller('singer-album')
export class SingerAlbumController {
  constructor(private readonly singerAlbumService: SingerAlbumService) {}

  @Post()
  @UseInterceptors(FileInterceptor('img', storage))
  create(@Body() createSingerAlbumDto: CreateSingerAlbumDto, @UploadedFiles() file) {
    try {
      // console.log(data);
      if (file != undefined) {
        if (file.mimetype != "img/svg+xml" && file.mimetype != "img/png" && file.mimetype && "img/jpg" && file.mimetype != "img/jpeg") {
          throw new Error('Only .png, .jpg and .jpeg format allowed!')
        }
        createSingerAlbumDto.img = file.path;
      } else {
        createSingerAlbumDto.img = "";
      }

      return this.singerAlbumService.create(createSingerAlbumDto);
    } catch (error) {
      return error.message
    }
  }

  @Get()
  findAll() {
    return this.singerAlbumService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.singerAlbumService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSingerAlbumDto: UpdateSingerAlbumDto) {
    return this.singerAlbumService.update(+id, updateSingerAlbumDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.singerAlbumService.remove(+id);
  }
}
