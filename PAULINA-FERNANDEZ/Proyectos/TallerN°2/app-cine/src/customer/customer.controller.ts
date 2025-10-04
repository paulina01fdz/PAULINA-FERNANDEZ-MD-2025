import {
    Body,
    Controller,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Put,
} from '@nestjs/common'; @Controller('customer')
export class CustomerController {
    // Registrar nuevo cliente
    @Post('register-customer')
    registerCustomer(
        @Body('nombre') nombre: string,
        @Body('email') email: string,
        @Body('telefono') telefono: string,
    ) {
        return `Cliente registrado: ${nombre}, Email: ${email}, Teléfono: ${telefono}`;
    }

    // Validar existencia por id
    @Get('get-customer-info/:id')
    getCustomerInfo(@Param('id', ParseIntPipe) id: number) {
        return `Cliente con ID ${id} existe en el sistema`;
    }

    // Actualizar información de cliente
    @Put('update-customer-info/:id')
    updateCustomerInfo(
        @Param('id', ParseIntPipe) id: number,
        @Body('nombre') nombre?: string,
        @Body('email') email?: string,
        @Body('telefono') telefono?: string,
    ) {
        return `Cliente ${id} actualizado. Nombre: ${nombre}, Email: ${email}, Teléfono: ${telefono}`;
    }
    // Obtener cliente por email
    @Get('get-customer-by-email/:email')
    getCustomerByEmail(@Param('email') email: string) {
        return `Cliente existente y validado con email ${email}`;
    }
}