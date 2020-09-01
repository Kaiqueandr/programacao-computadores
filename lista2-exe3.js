
chefe()

function chefe(){
    //Não vamos mais declarar variaveis usando a palavra chave var
    //a partir de agora vamos declara-la usando o let (escopo local da função onde é declarado)
    let vetor = [] // veto vai existir apenas dentro dessa função.
    do {

        var opcao = Number(prompt(`Digite [1]. \n Entrada \n [2]. Média idade \n [3].Maior idade \n [4]. Quantidade \n [5]. Percentual \n [6]. Sair`))
        switch(opcao){
            case 1: entrada(vetor)//passando uma referência na memória do vetor
                break
            case 2: calcularMedia(vetor)
                break
            case 3: calcularMaiorIdade(vetor)
                break
            case 4: calcularQuantidade(vetor)
                break
            case 5: calcularPercentual(vetor)
                break
            case 6: console.log(`Obrigado por utilizar nosso programa !`)
             break
            default: console.log(`Opção inválida, tente novamente !`)
        }
    
    }
    while (opcao != 6)
}

function entrada(vet){ // vet vai apontar para vetor
    console.log(`Entrou na função entrada`)
    // cria objeto
    let objeto = new Object()
    objeto.sexo = prompt(`Informe M para masculino e F para feminino`).toUpperCase() //converte letra para maisculo
    objeto.altura = Number(prompt(`Informe a altura:`))
    objeto.idade = Number(prompt(`Informe a idade: `))
    objeto.olhos = prompt(`Informe para olhos: A (Azuis)- V (Verde) - C(Castanho)`)
    //Vamos inserir em vetor e não em vet
    vet.push(objeto)//
    console.log(`Habitante inserido com sucesso !`)
}

function calcularMedia(vet){ // vet vai apontar para vetor
    console.log(`Entrou na função calcular média`)
    let soma = 0 // somar idades
    let qtde = 0 // conta qts pessoas tem olhos castanhos e altura superior a 1.60
    for(let i=0;i<vet.length;i++){
        if((vet[i].olhos == "C") && (vet[i].altura > 1.60))
                soma = soma + vet[i].idade
                qtde++
    }
    console.log(`A média da idade é de ${soma/qtde}`)
}

function calcularMaiorIdade(vet){ // vet vai apontar para vetor
    for(let i =1; i < vet.length;i++){
        if(vet[i].idade > maiorIdade){
        maiorIdade = vet[i].idade // atualiza a maior idade
    } 
}
    console.log(`A maior idade é ${maiorIdade}`)
}

function calcularQuantidade(vet){ // vet vai apontar para vetor
    let qtde = 0 
    for(let i = 0; i<vet.length;i++){
        if(((vet[i].sexo == "F") && (vet[i].idade >= 20) && (vet[i].idade <= 45)) 
        || ((vet[i].olhos == "A") && (vet[i].altura < 1.70))){
            qtde++
        }
    }
    console.log(`A quantidade é igual a ${qtde}`)
}
function calcularPercentual(vet){ // vet vai apontar para vetor
    let conta = 0
    for(let i =1; i < vet.length;i++){
        if(vet[i].sexo == "M"){
        conta++
        } 
}
    console.log(`O percentual de homens é igual a ${(conta/vet.length)*100} `)
}