
/* exemplos de JS utilizando a especificação ES5

Array.forEach()
Array.map()
Array.filter()
Array.reduce()
Array.every()
Array.some()
Array.indexOf()
JSON.parse()
JSON.stringify()
Date.now()  -> Já aprendemos */

chefe()

var conteudo = ""
function chefe(){

    let vetor =[10, 30, 50, 70, 90, 110, 130, 150, 170]
    
    vetor.forEach(funcao)
    vetor.forEach(acumula)
    console.log(conteudo)
    /*
    //percorrer o vetor
    for(let i=0;i<vetor.length;i++)
    console.log(`O elemento ${vetor[i]} está na posição ${i}`) */
}
//os parametros são somente o elemento
function acumula(elemento){
    conteudo = conteudo + " = " + elemento

}

// os paramentros são os elementos em sua posição
function funcao(elemento, posicao){
    if(posicao % 2 == 0){
    console.log(`O elemento ${elemento} está na posição ${posicao}`)
    }
}

// funcao map
var idades = [10, 13, 17, 18, 19, 20, 22, 26]

var novo = idades.map(multiplica)
var novo2 = idades.map(parimpar)

console.log(novo)
console.log(novo2)

function parimpar(elemento){
    if(elemento % 2 == 0){
        return 0
    }
    else {
        return 1
    }
}
function multiplica(elemento){
    return elemento * 2 // todos elementos do vetor serão multiplicados por 2
}

// podemos criar variáveis do tipo função
var x = function teste(){
    console.log(`Variáveis do tipo de uma função`)
}

x()

var soma = function soma(a, b){
    console.log( a + b)

}

soma(3, 6)
var subtracao = function subtracao(a, b){
    console.log( a - b )
}

subtracao(6, 1)