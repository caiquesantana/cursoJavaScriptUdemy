//Armazenando funcao dentro de uma variavel
const imprimirSoma = function (a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma funcao arrow em uma variavel

const soma = (a, b ) => {
    return a + b
}

console.log(soma(9, 1))

//retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(7, 3))