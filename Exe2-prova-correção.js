chefe()

function chefe(){
    // declarar a matriz
    let matriz = [] // guarda ponto dos times na rodada
    // Criando vetor dos times
    let vetor = []
    cadastra(matriz, vetor) // cadastrar 4 times
    calculaMedia(matriz, vetor)
    calcularMenorpontuacao(matriz, vetor)

    function cadastra(mat, vet){ 
        for(let i=0;i<4;i++){//4 carros
            let carros = new Object()
            carros.marca = prompt(`Informe a marca do carro: `)
            carros.modelo = prompt(`Informe o modelo do carro: `)
            carros.ano = Number(prompt(`Informe o ano do carro: `))
            carros.valor = Number(prompt(`Informe o valor do carro: `))
            vet.push(carros)
            mat[i] = []// cada linha da matriz é um vetor
            alert(`Iniciando Avaliação `)
            for(let j=0;j<5;j++){ // 5 avaliações dos carros
                mat[i][j] = Number(prompt(`Informe a nota do carro ${i+1} na ${j+1}ª avaliação: `))
            }
    
        }
    }
    function calculaMedia(mat, vet){ 
        for(let i=0;i<4;i++){ // para cada carro
            for(let j=0;j<5;j++){ // para cada avaliação
                // soma no vetor na posição i
               vet[i].media = vet[i].media + mat[i][j] // acabou a soma
            }
            vet[i].media = vet[i].media/5// calculando a média
        }
        console.log(`O carro ${vet[i].marca} teve a média das avaliações igual a : ${vet[i].media} `) // 
    }
    function calcularMenorpontuacao(mat, vet){
        for(let j=0;j<5;j++) {// para cada avaliação
            let menorPontuacao = mat[0][j]
            let modelomenor = vet[0].modelo
            for(let i=0;i<4;i++){//para cada carro
                if(mat[i][j] < maisPontos){
                    menorPontuacao = mat[i][j]
                    modelomenor = vet[i].modelo
                }
            }
            console.log(`O carro de modelo ${modelomenor} foi o que obteve a menor pontuação na ${j+1}ª avaliação.`)
        }
    }
}