// Hoisting representado en la funcion "sistemaReservas"
sistemaReservas();// funciona auqnue la función esté antes de la definición

function seleccionarPelicula() {
    //Scope local de la variables de la función
    let pelicula;
    let precio;
    let opcion;

    while (true) {
        opcion = prompt(
            "Seleccione la película:\n1. Avengers ($15000)\n2. Batman ($12000)\n3. Mario Bros ($10000)"
        );

        switch (opcion) {
            case "1":
                pelicula = "Avengers";
                precio = 15000;
                break;
            case "2":
                pelicula = "Batman";
                precio = 12000;
                break;
            case "3":
                pelicula = "Mario Bros";
                precio = 10000;
                break;
            default:
                console.log("Opción inválida, intente nuevamente.");
                continue; // volever a mostrar el menú
        }
        break; // sale del bucle si es válido
    }

    console.log("Has seleccionado:", pelicula, "🎬");
    console.log("El precio de la entrada es: $" + precio);
    //Retornar el objeto con las variables locales de la función
    return { pelicula, precio };
}

function seleccionarHorario() {
    let dia, hora; //Variables locales 
    let opcionDia, opcionHora;

    while (true) {
        opcionDia = prompt("Seleccione el día:\n1. Lunes\n2. Martes\n3. Miércoles\n4. Jueves\n5. Viernes");
        //Estructura de control para seleccionar el día
        switch (opcionDia) {
            case "1": dia = "Lunes"; break;
            case "2": dia = "Martes"; break;
            case "3": dia = "Miércoles"; break;
            case "4": dia = "Jueves"; break;
            case "5": dia = "Viernes"; break;
            default:
                console.log("Día seleccinado inválido.");
                continue; 
        }
        break;
    }

    // Bucle para elegir hora
    while (true) {
        opcionHora = prompt("Seleccione la hora:\n1. 18:00\n2. 20:30\n3. 22:00");
        switch (opcionHora) {
            case "1": hora = "18:00"; break;
            case "2": hora = "20:30"; break;
            case "3": hora = "22:00"; break;
            default:
                console.log("Hora seleccionada inválida.");
                continue; 
        }
        break;
    }
    return { dia, hora };
}

function procesarPago(precio) {
    let montoIngresado;

    while (true) {
        montoIngresado = parseInt(prompt("Ingrese el monto a pagar:"));

        if (montoIngresado < precio) {
            console.log("Fondos insuficientes. Se requieren $" + precio);
            continue; 
        } else {
            let cambio = montoIngresado - precio;
            console.log("Pago exitoso. Cambio: $" + cambio);
            return "Pagado";
        }
    }
}

function sistemaReservas() {
    console.log("=== Bienvenido al sistema de reservas del cine ===");

    let { pelicula, precio } = seleccionarPelicula();
    let horario = seleccionarHorario();
    let pago = procesarPago(precio);

    console.log("=== Transacción Exitosa ===");
    console.log("Película:", pelicula);
    console.log("Día:", horario.dia);
    console.log("Hora:", horario.hora);
    console.log("Estado de pago:", pago);
}

