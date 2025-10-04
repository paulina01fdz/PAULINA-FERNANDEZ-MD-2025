import { Type } from 'class-transformer';
import {
    IsInt,
    IsNotEmpty,
    IsString,
    Matches,
    Min,
    Max,
} from 'class-validator';

export class CrearPeliculaDto {
    @IsString({ message: 'El título debe ser un texto' })
    @IsNotEmpty({ message: 'El título es obligatorio' })
    @Matches(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s0-9:.,!¿?-]+$/, {
        message: 'El título solo puede contener letras, números, espacios y signos de puntuación básicos',
    })
    titulo: string;

    @Type(() => Number)
    @IsInt({ message: 'La duración debe ser un número entero' })
    @Min(1, { message: 'La duración debe ser mayor a 0 minutos' })
    @Max(180, { message: 'La duración no puede exceder 180 minutos' })
    duracion: number;

    @Type(() => Number)
    @IsInt({ message: 'El precio debe ser un número entero' })
    @Min(0, { message: 'El precio no puede ser negativo' })
    @Max(100000, { message: 'El precio no puede exceder $100,000' })
    @IsNotEmpty({ message: 'El precio es obligatorio' })
    precio: number;
}