// declaradas

function saludar(nombre) {
    console.log(`hola ${nombre}`)
}

// saludar("daniel");

// expresion

function suma(n1, n2){
    return n1+n2
}

// let x = suma(3, 3);

// funciones auto-invocadas

(function() {
    let x = "hello!!"; // i will invoke myself
})();

// arrow function
// arrow funciones que retornan un valor

const division = (n1, n2) => {
    return n1 / n2
};

// division(20,2);
// se puede hacer con sumas, restas o multiplicaciones

const imprimirMayorEdad = (edad) => edad >= 18;

const a = imprimirMayorEdad(16);
// console.log(a)