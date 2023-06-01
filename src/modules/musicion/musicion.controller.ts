import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { MusicionService } from './musicion.service';
import { CreateMusicionDto } from './dto/create-musicion.dto';
import { UpdateMusicionDto } from './dto/update-musicion.dto';
import { MyMulter } from 'src/commens/classes/storgehelper';
import { FileInterceptor } from '@nestjs/platform-express';
export const storage = {
  storage: MyMulter.Storage('./uploads/musicionimages')
};
@Controller('musicion')
export class MusicionController {
  constructor(private readonly musicionService: MusicionService) { }

  @Post()
  @UseInterceptors(FileInterceptor('img', storage))
  create(@Body() createMusicionDto: CreateMusicionDto, @UploadedFiles() file,) {
    try {
       console.log(createMusicionDto);
      if (file != undefined) {
        if (file.mimetype != "img/svg+xml" && file.mimetype != "img/png" && file.mimetype && "img/jpg" && file.mimetype != "img/jpeg") {
          throw new Error('Only .png, .jpg and .jpeg format allowed!')
        }
        createMusicionDto.img = file.path;
      } else {
        createMusicionDto.img = "";
      }

      return this.musicionService.create(createMusicionDto);
    } catch (error) {
      return error.message
    }

  }


@Get()
findAll() {
  return this.musicionService.findAll();
}

@Get(':id')
findOne(@Param('id') id: string) {
  return this.musicionService.findOne(+id);
}

@Patch(':id')
update(@Param('id') id: string, @Body() updateMusicionDto: UpdateMusicionDto) {
  return this.musicionService.update(+id, updateMusicionDto);
}

@Delete(':id')
remove(@Param('id') id: string) {
  return this.musicionService.remove(+id);
}
}
