import { Module } from '@nestjs/common';
import { MusicionService } from './musicion.service';
import { MusicionController } from './musicion.controller';

@Module({
  controllers: [MusicionController],
  providers: [MusicionService]
})
export class MusicionModule {}
