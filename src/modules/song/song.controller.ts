import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFiles, UploadedFile } from '@nestjs/common';
import { SongService } from './song.service';
import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';
import { MyMulter } from 'src/commens/classes/storgehelper';
import { FileFieldsInterceptor, FileInterceptor } from '@nestjs/platform-express';
export const storage = {
  storage: MyMulter.Storage('./uploads/songsources'),
};
@Controller('song')
export class SongController {
  constructor(private readonly songService: SongService) {}

  @Post()
  
  @UseInterceptors(FileInterceptor('sources', storage))
  creatsorc(@UploadedFile() file:any ,@Body() createSongDto: CreateSongDto) {
  
    
    
    try{
      if (file != undefined) {
        if (file.mimetype != "sources/mp3"){
          throw new Error ('Only .mp3,  format allowed!') 
         
      } 
      createSongDto.sources=file.path
    
    }else {
      createSongDto.sources=file
   }
  createSongDto.sources=file.path
     return this.songService.create( createSongDto);
  }catch(e){
    return e.message;
  }}
  

  @Get()
  findAll() {
    return this.songService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.songService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSongDto: UpdateSongDto) {
    return this.songService.update(+id, updateSongDto);
  }

  

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.songService.remove(+id);
  }
}
