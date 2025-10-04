import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';

@Controller('theater')
export class TheaterController {
  // Consultar horarios de una sala
  @Get('get-theater-schedule/:salaId')
  getTheaterSchedule(
    @Param('salaId', ParseIntPipe) salaId: number,
    @Query('fecha') fecha?: string,
  ) {
    return `Horarios de la sala ${salaId} para la fecha: ${fecha || 'hoy'}`;
  }

  //Obtener información de sala
  @Get('get-theater-info/:id')
  getTheaterInfo(@Param('id', ParseIntPipe) id: number) {
    return `Información de la sala ${id} validada correctamente`;
  }

  // Reservar sala
  @Post('reserve-theater/:id')
  reserveTheater(
    @Param('id', ParseIntPipe) id: number,
    @Body('fecha') fecha: string,
    @Body('hora') hora: string,
    @Body('peliculaId') peliculaId: number,
  ) {
    return `Sala ${id} reservada para película ${peliculaId} el ${fecha} a las ${hora}`;
  }

  //Crear nueva sala
  @Post('create-theater')
  createTheater(
    @Body('nombre') nombre: string,
    @Body('capacidad') capacidad: number,
  ) {
    return `Sala "${nombre}" creada con capacidad para ${capacidad} personas`;
  }
}