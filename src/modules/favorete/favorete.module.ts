import { Module } from '@nestjs/common';
import { FavoreteService } from './favorete.service';
import { FavoreteController } from './favorete.controller';

@Module({
  controllers: [FavoreteController],
  providers: [FavoreteService]
})
export class FavoreteModule {}
