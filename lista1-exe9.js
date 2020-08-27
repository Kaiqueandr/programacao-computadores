
chefe()

function chefe(){

    var numero = Number(prompt(`Digite um número : `))
    exe9(numero)
}

function exe9(num){ // Supondo que seja o número 6

    var soma = 0
    for(var divisor = num; divisor >= 1; divisor--){ // divisor começa em 6 e vai até o 1
        if(num % divisor == 0){
            soma = soma + divisor
        }
    }

    /* 
    for(var divisor = 1; divisor <= num; divisor++){ // divisor começa em 1 e vai até o 6
        if(num % divisor == 0){
            soma = soma + divisor
        }
    } */
    console.log(`A soma dos divisores de ${num} é ${soma}`)
}