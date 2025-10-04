import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Query,
} from '@nestjs/common';

@Controller('ticket')
export class TicketController {
    // Comprar boleto
    @Post('buy-ticket')
    buyTicket(
        @Body('peliculaId') peliculaId: number,
        @Body('salaId') salaId: number,
        @Body('asiento') asiento: string,
        @Body('clienteId') clienteId: number,
    ) {
        return `Boleto comprado: Película ${peliculaId}, Sala ${salaId}, Asiento ${asiento}, Cliente ${clienteId}`;
    }

    //Validar boleto
    @Post('validate-ticket/:id')
    validateTicket(@Param('id', ParseIntPipe) id: number) {
        return `Boleto ${id} validado correctamente`;
    }

    //Consultar boletos por cliente
    @Get('get-customer-tickets/:clienteId')
    getCustomerTickets(
        @Param('clienteId', ParseIntPipe) clienteId: number,
        @Query('activos') activos?: string,
    ) {
        const filtro = activos === 'true' ? 'activos' : 'todos';
        return `Boletos ${filtro} del cliente ${clienteId}`;
    }

    //Cancelar boleto
    @Delete('cancel-ticket/:id/:motivo')
    cancelTicket(
        @Param('id', ParseIntPipe) id: number,
        @Param('motivo') motivo: string,
    ) {
        return `Boleto ${id} cancelado. Motivo: ${motivo}`;
    }
}