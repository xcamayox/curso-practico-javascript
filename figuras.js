console.log("hello word");



console.group("Cuadrado");
function hallarPerimetroCuadrado(lado){
    return lado * 4;
}

function hallarAreaCuadrado(lado){
    return lado*lado;
}

console.groupEnd();

console.group("Triangulo");
function hallarPerimetroTriangulo(lado1,lado2,base){
    return lado1+lado2+base;
}
function hallarAreaTriangulo(base , altura){
    return (base* altura)/2;
}

console.groupEnd();

console.group("Circulo");

function hallarPerimetroCirculo(radio){
return (2*radio)*Math.PI;
}
function hallarAreaCirculo(radio){
return Math.PI*(radio*radio);
}

console.groupEnd();

function CalcularPerimetro(){
    let lado= document.getElementById("txtlado").value;
    alert(hallarPerimetroCuadrado(lado));
}
function CalcularArea(){
    let lado= document.getElementById("txtlado").value;
    alert(hallarAreaCuadrado(6));
}




