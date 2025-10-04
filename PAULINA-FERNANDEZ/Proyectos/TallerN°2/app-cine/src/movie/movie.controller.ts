import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Put,
    Query,
} from '@nestjs/common';

import { BuscarPeliculaDto as getPeliculaDto } from './dto/get-pelicula.dto';
import { CrearPeliculaDto } from './dto/post-pelicula.dto';
import { ActualizarPeliculaDto } from './dto/update-pelicula.dto';
@Controller('movie')
export class MovieController {

    // Buscar películas por género con query parameters
    @Get('search-movies-by-genre/:genero')
    searchMoviesByGenre(
        @Param('genero') genero: string,
        @Query() query: getPeliculaDto,
    ) {
        return `Buscando películas del género ${genero} con filtros: ${JSON.stringify(query)}`; // Se muestra el género y los filtros dados los query params
    }

    // Obtener película por ID
    @Get('get-movie-details/:id')
    getMovieDetails(@Param('id', ParseIntPipe) id: number) {
        const nombres = {
            1: "Avatar: El Camino del Agua",
            2: "Top Gun: Maverick",
            3: "Black Panther: Wakanda Forever"
        };

        const nombre = nombres[id] || "Película no encontrada";

        return `La película con ID: ${id} corresponde a ${nombre}`;
    }
    //Crear nueva película
    @Post('create-movie')
    createMovie(@Body() crearPeliculaDto: CrearPeliculaDto) {
        return `Película creada: ${JSON.stringify(crearPeliculaDto)}`;
    }

    // Programar función de película
    @Post('schedule-movie-function/:id')
    scheduleMovieFunction(
        @Param('id', ParseIntPipe) id: number,
        @Body('fecha') fecha: string,
        @Body('hora') hora: string,
    ) {
        return `Función programada para película ${id} el ${fecha} a las ${hora}`;
    }

    // Actualizar información de una película completa
    @Put('update-movie-info/:id')
    updateMovieInfo(
        @Param('id', ParseIntPipe) id: number,
        @Body() actualizarPeliculaDto: ActualizarPeliculaDto,
    ) {
        return `Película ${id} actualizada: ${JSON.stringify(actualizarPeliculaDto)}`;
    }

    // Eliminar película
    @Delete('delete-movie/:id/:motivo')
    deleteMovie(
        @Param('id', ParseIntPipe) id: number,
        @Param('motivo') motivo: string,
    ) {
        return `Película ${id} eliminada. Motivo: ${motivo}`;
    }

}
