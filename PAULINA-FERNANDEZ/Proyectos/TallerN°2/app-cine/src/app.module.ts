import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerModule } from './customer/customer.module';
import { TicketModule } from './ticket/ticket.module';
import { MovieModule } from './movie/movie.module';
import { TheaterModule } from './theater/theater.module';

@Module({
  imports: [CustomerModule, TicketModule, MovieModule, TheaterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
