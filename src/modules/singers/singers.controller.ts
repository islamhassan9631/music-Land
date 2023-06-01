import { Controller, Get, Post, Body, Patch, Param, Delete ,UseInterceptors, UploadedFiles} from '@nestjs/common';
import { SingersService } from './singers.service';
import { CreateSingerDto } from './dto/create-singer.dto';
import { UpdateSingerDto } from './dto/update-singer.dto';
import {  FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { MyMulter } from 'src/commens/classes/storgehelper';

export const storage = {
  storage: MyMulter.Storage('./uploads/singersimages')
};
@Controller('singers')
export class SingersController {
  constructor(private readonly singersService: SingersService) {}

  @Post()
  create(@Body() createSingerDto: CreateSingerDto) {
    return this.singersService.create(createSingerDto);
  }

  @Get()
  findAll() {
    return this.singersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.singersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSingerDto: UpdateSingerDto) {
    return this.singersService.update(+id, updateSingerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.singersService.remove(+id);
  }
  @Post("/file")
 @UseInterceptors(FileInterceptor('img', storage))
  uploadfile(@UploadedFiles() file,@Body() data: any){
    try {
      // console.log(data);
      if (file != undefined) {
        if (file.mimetype != "img/svg+xml"&& file.mimetype != "img/png" && file.mimetype && "img/jpg" && file.mimetype != "img/jpeg"){
          throw new Error ('Only .png, .jpg and .jpeg format allowed!')
      }
         data.img= file.path;
      } else {
         data.img= "";
      }
      
      return this.singersService.create(data);
    } catch (error) {
      return error.message
    }

  }
}




