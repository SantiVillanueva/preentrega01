/*Soy Santiago Villanueva y en esta pre entrega arme un prototipo de bar, incluyendo el calculo de un descuento.*/


function checkAge(age) {
    if (age > 17) {
    return true;
    }  else {
        alert( "Tenes que ser mayor de 18 para comprar" );
        }
    }
    
    let age = prompt("¿Que edad tenes?");

let descuento = (cuenta, porcentaje) => {
    let desCode= "1417"
    for (let i = 2; i >= 0; i--) {
        let userCode = prompt("Ingresa tu código de descuento. Tenés " + (i + 1) + " oportunidades.")
        if (userCode === desCode) {
            cuenta= cuenta* porcentaje;
            alert("Tu cuenta a pagar en la caja es: $" + cuenta);
            console.log("el total con descuento será: $" + cuenta)
            break;
        } else {
            alert("Codigo incorreto Te quedan " + i + " intentos.")
        }
    }
    return cuenta
}

if (checkAge(age)) {
    let cuenta = 0;
    let option = prompt("Bienvenido/a ¿Qué querés tomar? \n1- Cerveza. \n2 - Fernet. \n3 - Vino. \n4 - Whisky.  \n5 - Ir a pagar \n0 - para finalizar.");
    while (option != "0") {
        switch (option) {
            case "1":
                const cerveza = 10;
                let cercantidad = parseInt(prompt("Ingresa cantidad que desea pedir"));
                let cervezas = cerveza * cercantidad;
                cuenta= cuenta + cervezas;
                console.log(cercantidad + "cervezas: $" + cervezas)
                break;
            case "2":
                const fernet = 12;
                let fercantidad = parseInt(prompt("Ingresa cantidad que desea pedir"));
                let fernets = fernet * fercantidad;
                cuenta= cuenta + fernets;
                console.log(fercantidad + " fernets: $" + fernets);
                break;
            case "3":
                const vino = 15;
                let vincantidad = parseInt(prompt("Ingresa cantidad que desea pedir"));
                let vinos = vino * vincantidad;
                cuenta= cuenta + vinos
                console.log(vincantidad + "vino: $" + vinos);
                break;
            case "4":
                const whisky = 20;
                let whicantidad = parseInt(prompt("Ingresa cantidad que desea pedir"));
                let whiskys = whisky * whicantidad;
                cuenta= cuenta + whiskys
                console.log(whicantidad + "whisky: $" + whiskys);
                break;
            case "5":
                alert ("El total del pedido es: $" + cuenta);
                console.log("el total del pedido es $" + cuenta);
                cuenta= descuento (cuenta, 0.8);
                break;
            default:
                alert("Elegiste una opción inválida");
                break;              
        }

        option = prompt("Elegí una opción: \n1- Cerveza. \n2 - Fernet. \n3 - Vino. \n4 - Whisky.  \n5 - Ir a pagar \n0 - para finalizar.");
    }
}
else {

    alert("No puede comprar en este momento.");
}


alert("Adiós");

