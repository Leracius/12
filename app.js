alert("Hola bienvenido a nuestro comercio puede elegir entre las siguientes bebidas");
alert("Cerveza, jugo o agua");
let bebidaprim = prompt("Ingrese bebida");
let edad = prompt("Ingrese su edad");
let bebida = bebidaprim.toLowerCase()
let cerveza = 100
let jugo = 80
let agua = 30

if(edad < 18 && bebida == "cerveza"){
    alert("Usted es menor de edad, no podemos venderle");
}else if(edad >= 18 && bebida == "cerveza"){
    let monto = prompt("El precio es $100, ingrese con cuanto quiere pagar");
    if(monto < 100){
        alert("Pago insuficiente");
    }else if(monto ==100){
        alert("Compra correcta");
    }else if(monto > 100){
        alert("Su vuelto es de $" + (parseFloat(monto) - cerveza));
    }
}else if(bebida == "jugo"){
    monto = prompt("El precio es de $80, ingrese con cuanto quiere pagar");
    if(monto < 80){
        alert("Pago insuficiente");
    }else if(monto == 80){
        alert("Compra correcta");
    }else if(monto > 80){
        alert("Su vuelto es de $" + (parseFloat(monto) - jugo));
    }
}else if(bebida == "agua"){
    monto = prompt("El precio es de $30, ingrese con cuanto quiere pagar");
    if(monto < 30){
        alert("Pago insuficiente");
    }else if(monto == 30){
        alert("Compra correcta");
    }else if(monto > 30){
        alert("Su vuelto es de $" + (parseFloat(monto) - agua));
    }
}
