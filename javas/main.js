let entrada = prompt("Ingresar tu Usuario (Para salir ingresa 0)");

while(entrada != "0" ){
   switch (entrada) {
       case "Nagi":
            alert("Hola de nuevo Nagi");
            break;
        case "Messi":
            alert("Hola de nuevo Messi");
            break;
       default:
           alert("Bienvenido/a nuevo/a usuario " + entrada)
           break;
   }
   entrada = prompt("Ingresar tu Usuario (Para salir ingresa 0)");
}


let nombre = prompt ("Desea comprar  (1)Quitar Publicidad  (2)Rango de animes vistos                       (3)Ver anime en 4k   (4)Ninguno")
let cantidad = "1"
let precioProducto
let producto 

if (nombre == "1"){
    precioProducto = 500
    producto = "Quitar Publicidad"
}

else if(nombre == "2"){
    precioProducto = 250
    producto = "Rango de animes vistos"
}

else if(nombre == "3"){
    precioProducto = 150
    producto = "Ver anime en 4k"
}

else if(nombre == "4"){
    precioProducto = 0
    producto = "Nada"
}

else if(nombre == ""){
    precioProducto = 0
    producto = "Nada"
}

let precioTotal = cantidad * precioProducto
let mensaje = alert ("Tiene que pagar " + precioTotal + " Pesos por la compra de " + producto)

alert("Elija el rango de su membresia, para salir ingrese 0")
let seleccionarProductos = Number(prompt( " Comprar Membresia (1) 1 Año $6000 (2) 8 Meses $5000 (3) 1 Mes $1500 (4)Ninguna "))
let seleccionarCantidad;
let total = 0;


const cantidad2 = (cant, precio) => {
  return cant * precio
}


while (seleccionarProductos != 0) {
  switch (seleccionarProductos) {
    case 1:
      seleccionarCantidad= Number(prompt("Miembro por 1 Año, indique la cantidad"))
            total += cantidad2(seleccionarCantidad, 6000)
      break;
      case 2:
        seleccionarCantidad = Number(prompt("Miembro por 8 Meses, indique la cantidad"))
        total += cantidad2(seleccionarCantidad, 5000)
      break;
    case 3:
      seleccionarCantidad = Number(prompt("Miembro por 1 Meses, indique la cantidad"))
      total += cantidad2(seleccionarCantidad, 1500)
    break;
    case 4:
      seleccionarCantidad = Number(prompt("Miembro Gratuito, indique la cantidad"))
      total += cantidad2(seleccionarCantidad, 0)
    break;

    default:
      break;
  }
  seleccionarProductos = Number(prompt( "(1) 1 Año $6000 (2) 8 Meses $5000 (3) 1 Mes $1500 (4)Ninguna "))
}

alert("el total de la compra es de: " + total + " Disfrute su Membresia")
