let usuario1;

// Función de bienvenida al usuario a la página
function welcome() {
    // Se adquiere el nombre del usuario
    const NOMBRE = prompt(
        "Bienvenido a CórdobaClimbs, por favor ingresa tu nombre:"
    );

    // Se adquiere la edad del usuario y se verifica que el dato sea válido
    let EDAD = prompt("Por favor ingresa tu edad:");

    let esNumero = false;

    while (!esNumero) {
        if (!isNaN(EDAD) && EDAD > 0 && EDAD < 120) {
            esNumero = true;
            console.log("¡Se ingresó un número válido!");
        } else {
            EDAD = prompt("No se ingresó un número válido. Inténtelo nuevamente:");
        }
    }

    // Se adquiere el talle de calzado del usuario y se verifica que el dato sea válido
    let TALLE = prompt("Por favor ingresa tu talle de calzado:");

    esNumero = false;

    while (!esNumero) {
        if (!isNaN(TALLE) && TALLE > 0 && TALLE < 60) {
            esNumero = true;
            console.log("¡Se ingresó un número de calzado válido!");
        } else {
            TALLE = prompt(
                "No se ingresó un número de calzado válido. Inténtelo nuevamente:"
            );
        }
    }

    // Se adquiere el correo electrónico del usuario y se verifica que el dato sea válido
    let CORREO = prompt("Por favor ingresa tu correo electrónico:");
    let esCorreoValido = false;

    while (!esCorreoValido) {
        const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (regexCorreo.test(CORREO)) {
            esCorreoValido = true;
            console.log("¡Se ingresó un correo electrónico válido!");
        } else {
            CORREO = prompt(
                "No se ingresó un correo electrónico válido. Inténtelo nuevamente:"
            );
        }
    }

    // Clase constructora para almacenar datos del usuario

    class userCreator {
        constructor(nombre, edad, talle, correo) {
            this.nombre = nombre;
            this.edad = edad;
            this.talle = talle;
            this.correo = correo;
        }
    }

    usuario1 = new userCreator(NOMBRE, EDAD, TALLE, CORREO);
    console.log(usuario1);

    // Muestra los datos ingresados
    ingresedData(usuario1);

    // Llama a la función con el mensaje de bienvenida
    welcomeMessage(usuario1.nombre);
}

// Muestra los datos cargados por el usuario
function ingresedData(usuario1) {
    alert(
        "- Nombre: " +
        usuario1.nombre +
        "\n- Edad: " +
        usuario1.edad +
        "\n- Talle de calzado: " +
        usuario1.talle +
        "\n- Correo: " +
        usuario1.correo
    );
}

// Brinda un mensaje de bienvenida el sitio
function welcomeMessage(usuario1) {
    alert(
        "Hola " + usuario1 +
        '! Los pies de gato son un tipo de calzado especializado utilizado en la escalada en roca. Son zapatos ajustados y flexibles diseñados específicamente para proporcionar un mayor agarre y sensibilidad en la superficie de la roca. Es por esto que elegir el modelo correcto es tan importante. (Presiona "OK")'
    );
}

// Función para mostrar las opciones del menú en la consola
function displayMenu() {
    // Array con los elementos del menú
    const elementos = [
        "Elija el factor a tener en cuenta (ingrese el número deseado):",
        "1. La morfología de su pie",
        "2. El uso que harás del pie de gato",
        "3. Tu nivel de experiencia",
        "4. Presupuesto",
        "5. Salir",
    ];
    // Recorrer el array utilizando un bucle for
    for (let i = 0; i < elementos.length; i++) {
        console.log(elementos[i]);
    }
}

// Función para manejar el input del usuario y ejecutar la opción seleccionada
function handleInput(option, usuario1) {
    switch (option) {
        case "1":
            console.log("Opción 1 seleccionada");
            alert(
                "Generalmente podemos distinguir entre:\n- Pies estrechos: pies cónicos y dedos de los pies que 'caen' del dedo gordo al quinto dedo del pie.\n - Pies anchos: pies con un hueso metatarsiano bastante vertical y dedos más bien cortos y cuadrados. \n------------------------------------------------\nSi tiene un pie estrecho, puede consultar modelos como Miura Lacci, Futura o Solution. Por el contrario, modelos como Speedster, Testarossa o Genius serán más apropiados si tienes un pie ancho."
            );
            break;
        case "2":
            console.log("Opción 2 seleccionada");
            alert(
                "Es necesario tener en cuenta las características donde se pretende escalar:\n- En el caso de paredes o superficies sobresalientes con buen agarre, es recomendable optar por zapatos con una suela más suave, como el modelo Skwama.\n - En el caso de rutas largas y verticales con agarres angulares pequeños, recomendamos zapatos con una suela más rígida y cómoda, adecuados para un uso prolongado y capaces de soportar el peso del escalador también en agarres muy pequeños, como el Modelo Otaki."
            );
            break;
        case "3":
            console.log("Opción 3 seleccionada");
            alert(
                "Los que comienzan a escalar, tanto en rocódromo como en roca, necesitan un producto cómodo que tiende a ser rígido y de apoyo, diseñado para adaptarse gradualmente a zapatos más eficientes y suaves con un cierre más ajustado. \n- Para aquellos que están a punto de comenzar los expertos recomiendan modelos como Tarantula y Finale, un pie de gato que no deja marcas y diseñado específicamente para uso en interiores.\n - En el caso de escaladores más avanzados se puede dar un salto de calidad hacía modelos como Otaki, Solution o Scarpa Instinct."
            );
            break;
        case "4":
            console.log("Opción 4 seleccionada");
            let presupuesto = prompt(
                "Ingrese el presupuesto que pretende gastar (En dólares):"
            );
            if (presupuesto <= 100) {
                alert(
                    "Recomendamos comprar La Sportiva Tarantula por U$D 87 \n\n" +
                    "Presupuesto faltante U$D " +
                    (presupuesto - 87)
                );
            } else if (presupuesto > 100 && presupuesto <= 150) {
                alert(
                    "Recomendamos comprar La Sportiva Finale por U$D 137 \n\n" +
                    "Presupuesto restante U$D " +
                    (presupuesto - 137)
                );
            } else if (presupuesto > 150) {
                alert(
                    "Recomendamos comprar La Sportiva Solution por U$D 157 \n\n" +
                    "Presupuesto restante U$D " +
                    (presupuesto - 157)
                );
            } else {
                alert("Introduzca un valor numérico válido");
            }
            break;
        case "5":
            console.log(usuario1);
            alert("Enviaremos información a tu correo: '" + usuario1.correo + "'");
            console.log("Saliendo...");
            return;
        default:
            console.log("Opción invalida, por favor intentelo nuevamente.");
    }

    // Preguntar por la siguiente opción
    askOption();
}

// Función para solicitar la entrada del usuario mediante un prompt
function askOption() {
    const option = prompt(
        "Elija el factor a tener en cuenta (ingrese el número deseado):\n\n" +
        "1. La morfología de su pie\n" +
        "2. El uso que harás del pie de gato\n" +
        "3. Tu nivel de experiencia\n" +
        "4. Presupuesto\n" +
        "5. Salir"
    );

    handleInput(option, usuario1);
}

// Llame a la función de bienvenida
welcome();
// Llame a la función displayMenu para mostrar el menú inicial
displayMenu();
// Pregunta por la primera opción
askOption();
