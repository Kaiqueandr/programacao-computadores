chefe()

function calculaModelo(vet, mat){
    for(let j=0;j<5;j++){
        var menor = mat[0][j]
        var modelo = vet[0].modelo
        for(let i=0;i<4;i++){
            if (mat[i][j] < menor){
                menor = mat[i][j]
                modelo = vet[i].modelo
            }
        }
        console.log(`${menor} ${modelo}`)
    }
}

function calculaMedia(vet, mat){
    for(var i=0;i<4;i++){
       for(var j=0;j<5;j++){
            vet[i].media = vet[i].media + mat[i][j]
        }
        vet[i].media = vet[i].media / 5
        console.log(vet[i])
    }
}
function cadastra(vet, mat){
    for(var i=0;i<4;i++){ // para cada carro
        var carro = new Object()
        carro.marca = prompt(`Informe marca`)
        carro.modelo = prompt(`Informe modelo`)
        carro.ano = Number(prompt(`Informe ano`))
        carro.valor = Number(prompt(`Informe valor`))
        carro.media = 0
        // insere no vetor
        vet.push(carro)
        for(var j=0;j<5;j++){ // para cada nota
            mat[i][j] = Number(prompt(`Informe a nota`))
        }
    }   
}
