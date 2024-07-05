let juego;
function game() {
do {
    let pregunta1 = parseInt(prompt("Hola bienvenido a mi juego de preguntas preguntas \n seleciones las opciones con los numeros. \n ¿Cuál es la capital de Argentina? \n1. Mendoza\n2. Buenos Aires\n3. Salta"));
    switch (pregunta1) {
        case 1:
            alert("Te equivocaste");
            break;
        case 2:
            alert("¡Correcto!");
            break;
        case 3:
            alert("Incorrecto");
            break;
        default:
            alert("Las opciones no son válidas. Elige un número del 1 al 3");
            break;
    }
    let pregunta2 = parseInt(prompt("¿cual es la capital de francia?\n 1:Roma. \n 2:Paris. \n 3:Santiago"))
    if (pregunta2 == 1) {
        alert("Te equivocaste")
    }else if (pregunta2 == 2) {
        alert("¡Correcto!")
    }else if (pregunta2 == 3){
        alert("Te equivocaste")
    }else {
        alert("Las opciones no son válidas. Elige un número del 1 al 3")
    }
    let pregunta3 = parseInt(prompt("¿cual es la capital de Colombia?\n 1:Bogota. \n 2:Montevideo. \n 3:Lima"))
    if (pregunta3 == 1) {
        alert("¡Correcto!")
    }else if (pregunta3 == 2) {
        alert("Te equivocaste")
    }else if (pregunta3 == 3){
        alert("Te equivocaste")
    }else {
        alert("Las opciones no son válidas. Elige un número del 1 al 3")
    }
    juego = prompt("¿Quieres jugar de nuevo? (si/no)").toLowerCase();
} while (juego === "si");
alert("¡Gracias por jugar!");
}
game()