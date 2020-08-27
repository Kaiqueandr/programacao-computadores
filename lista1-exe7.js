
chefe()

function chefe(){
var vetor = [] //declara vetor
exe7(vetor) // passando o vetor como parameteo - ESCOPO GLOBAL
console.log(vetor)
calculaMedia(vetor)

}

function exe7(vet){ // vet representa vetor -> o que fizermos com vet, será feito em vetor
var numero = Number(prompt(`Digite um número: `))
do{
    //colocar o numero em vet
    vet.push(numero)
    numero = Number(prompt(`Digite outro número, digite um número negativo para encerrar`))

}
while (numero >= 0)

}
// calcular e mostrar a média
function calculaMedia(vet){
    var soma = 0 
    for(var i=0;i < vet.length;i++){
        soma = soma + vet[i]
    }
    console.log(`A média é igual a ${soma/vet.length}`)
}