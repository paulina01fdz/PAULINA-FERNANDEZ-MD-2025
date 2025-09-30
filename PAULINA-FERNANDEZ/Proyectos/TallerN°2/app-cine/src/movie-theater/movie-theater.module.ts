import { Module } from '@nestjs/common';
import { MovieTheaterController } from './movie-theater.controller';
import { MovieTheaterService } from './movie-theater.service';

@Module({
  controllers: [MovieTheaterController],
  providers: [MovieTheaterService]
})
export class MovieTheaterModule {}
