import { Type } from 'class-transformer';
import {
    IsAlpha,
    IsDate,
    IsInt,
    IsNotEmpty,
    IsOptional,
    IsString,
    Min,
} from 'class-validator';

export class BuscarPeliculaDto {
    @Type(() => Number)
    @IsInt({ message: 'La duración mínima debe ser un número entero' })
    @Min(1, { message: 'La duración mínima debe ser mayor a 0' })
    @IsOptional()
    duracionMinima?: number;

    @Type(() => Number)
    @IsInt({ message: 'La duración máxima debe ser un número entero' })
    @Min(1, { message: 'La duración máxima debe ser mayor a 0' })
    @IsOptional()
    duracionMaxima?: number;

    @Type(() => Number)
    @IsInt({ message: 'El precio máximo debe ser un número entero' })
    @Min(0, { message: 'El precio máximo no puede ser negativo' })
    @IsOptional()
    precioMaximo?: number;

    @Type(() => Date)
    @IsDate({ message: 'La fecha de estreno debe ser una fecha válida' })
    @IsOptional()
    fechaEstreno?: Date;

    @IsString({ message: 'El idioma debe ser un texto' })
    @IsAlpha('es-ES', { message: 'El idioma solo puede contener letras' })
    @IsOptional()
    idioma?: string;
}