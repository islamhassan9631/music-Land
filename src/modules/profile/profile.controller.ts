import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFiles, UseGuards, UploadedFile } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { MyMulter } from 'src/commens/classes/storgehelper';
import { FileInterceptor } from '@nestjs/platform-express';
import { JwtGuard } from 'src/auth/guard/jwt-auth/jwt-auth.guard';
export const storage = {
  storage: MyMulter.Storage('./uploads/userimages')
};
@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Post()
  @UseGuards(JwtGuard)
  @UseInterceptors(FileInterceptor('img', storage))
  create(@Body() createProfileDto: CreateProfileDto, @UploadedFile() file) {
    try {
      console.log(createProfileDto);
     if (file != undefined) {
       if (file.mimetype != "img/svg+xml" && file.mimetype != "img/png" && file.mimetype && "img/jpg" && file.mimetype != "img/jpeg") {
         throw new Error('Only .png, .jpg and .jpeg format allowed!')
       }
       createProfileDto.img = file.path;
     } else {
      createProfileDto.img = file;
     }

     return this.profileService.create(createProfileDto);
   } catch (error) {
     return error.message
   }
  }

  @Get()
  findAll() {
    return this.profileService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.profileService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProfileDto: UpdateProfileDto) {
    return this.profileService.update(+id, updateProfileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.profileService.remove(+id);
  }
}
