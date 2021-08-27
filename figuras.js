//Código del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;

// console.log("Los lados del cuadrado miden "+ladoCuadrado+"cm");

function perimetroCuadrado(lado){
    return lado * 4;
} 

// console.log("El perimetro del cuadrado es de "+perimetroCuadrado+"cm");

// const areaCuadrado = ladoCuadrado * ladoCuadrado;

function areaCuadrado(lado){
    return lado * lado;
}

// console.log("El área del cuadrado es de "+areaCuadrado+"cm^2");
console.groupEnd();
console.group("Triángulo");
//Código del triángulo

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;

// console.log(
//     "Los lados del triángulo miden: "
//     +ladoTriangulo1
//     +"cm, "
//     + ladoTriangulo2 
//     +"cm, "+ baseTriangulo 
//     +"cm"
//     );

// console.log("La altura del triángulo es de : "+alturaTriangulo+"cm");

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

// console.log("El perimetro del tríangulo es de "+perimetroTriangulo+"cm");

// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;

function areaTriangulo(altura, base){
    return (altura * base) /2;
}

// console.log("El área del triángulo es de "+areaTriangulo+"cm^2");
console.groupEnd();

console.group("Circulos");

//Codigo del Círculo

//Radio
// const radioCirculo = 4;
// console.log("El Radio del Circulo es de : "+radioCirculo+"cm");
// //Diametro
// const DiametroCirculo = radioCirculo * 2
// console.log("El Diametro del Circulo es de : "+DiametroCirculo+"cm");

function DiametroCirculo(radio){
    return radio *2;
}



//PI
const PI = Math.PI;
//Circunferencia

function perimetroCirculo(radio){
    return DiametroCirculo(radio) * PI;
}

// const perimetroCirculo = DiametroCirculo * PI;
// console.log("El perimetro del circulo es de "+perimetroCirculo+"cm");
//Área

function AreaCirculo(radio){
    return (radio * radio) * PI;
}

// const AreaCirculo = (radioCirculo * radioCirculo) * PI;
// console.log("El área del circulo es de "+AreaCirculo+"cm^2");
console.groupEnd();
