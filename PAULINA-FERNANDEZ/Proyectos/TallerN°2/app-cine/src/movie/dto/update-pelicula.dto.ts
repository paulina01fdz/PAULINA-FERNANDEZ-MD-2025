import { Type } from 'class-transformer';
import {
    IsInt,
    IsOptional,
    IsString,
    Matches,
    Min,
    Max,
} from 'class-validator';

export class ActualizarPeliculaDto {
    @IsString({ message: 'El título debe ser un texto' })
    @IsOptional()
    @Matches(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s0-9:.,!¿?-]+$/, {
        message: 'El título solo puede contener letras, números, espacios y signos de puntuación básicos',
    })
    titulo?: string;

    @Type(() => Number)
    @IsInt({ message: 'La duración debe ser un número entero' })
    @Min(1, { message: 'La duración debe ser mayor a 0 minutos' })
    @Max(500, { message: 'La duración no puede exceder 500 minutos' })
    @IsOptional()
    duracion?: number;

    @Type(() => Number)
    @IsInt({ message: 'El precio debe ser un número entero' })
    @Min(0, { message: 'El precio no puede ser negativo' })
    @Max(100000, { message: 'El precio no puede exceder $100,000' })
    @IsOptional()
    precio?: number;
}

