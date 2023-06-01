import { Controller, Get, Post, Body, Patch, Param, Delete, UploadedFile, UseInterceptors } from '@nestjs/common';
import { MusicService } from './music.service';
import { CreateMusicDto } from './dto/create-music.dto';
import { UpdateMusicDto } from './dto/update-music.dto';
import { MyMulter } from 'src/commens/classes/storgehelper';
import { FileInterceptor } from '@nestjs/platform-express';
export const storage = {
  storage: MyMulter.Storage('./uploads/musicsources'),
};
@Controller('music')
export class MusicController {
  constructor(private  musicService: MusicService) {}

  @Post()
  @UseInterceptors(FileInterceptor('sources', storage))
  create(@UploadedFile() file:any , @Body() createMusicDto: CreateMusicDto) {
    
    try{
  //     if (file != undefined) {
  //       if (file.mimetype != "sources/mp3" ){
  //         throw new Error ('Only .mp3,  format allowed!') 
         
  //     } 
  //     createMusicDto.sources=file.path
    
  //   }else {
  //     createMusicDto.sources=file
  //  }
  createMusicDto.sources=file.path
     return this.musicService.create( createMusicDto);
  }catch(e){
    return e.message;
  }}
  

  @Get()
  findAll() {
    return this.musicService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.musicService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMusicDto: UpdateMusicDto) {
    return this.musicService.update(+id, updateMusicDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.musicService.remove(+id);
  }
}
