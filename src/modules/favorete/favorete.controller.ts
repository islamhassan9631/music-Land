import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FavoreteService } from './favorete.service';
import { CreateFavoreteDto } from './dto/create-favorete.dto';
import { UpdateFavoreteDto } from './dto/update-favorete.dto';

@Controller('favorete')
export class FavoreteController {
  constructor(private readonly favoreteService: FavoreteService) {}

  @Post()
  create(@Body() createFavoreteDto: CreateFavoreteDto) {
    return this.favoreteService.create(createFavoreteDto);
  }

  @Get()
  findAll() {
    return this.favoreteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.favoreteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFavoreteDto: UpdateFavoreteDto) {
    return this.favoreteService.update(+id, updateFavoreteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.favoreteService.remove(+id);
  }
}
