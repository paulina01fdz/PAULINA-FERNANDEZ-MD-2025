import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerModule } from './customer/customer.module';
import { TicketModule } from './ticket/ticket.module';
import { MovieModule } from './movie/movie.module';
import { MovieTheaterModule } from './movie-theater/movie-theater.module';

@Module({
  imports: [CustomerModule, TicketModule, MovieModule, MovieTheaterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
