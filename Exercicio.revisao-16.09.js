
chefe()

function chefe(){
    // declarar a matriz
    let matriz = [] // guarda ponto dos times na rodada
    // Criando vetor dos times
    let vetor = []
    cadastra(matriz, vetor) // cadastrar 4 times
    calculaMediapontuacao(matriz, vetor)
    calcularMaiorpontuacao(matriz, vetor)

    function cadastra(mat, vet){ // mat representa a matriz na função chefe()
        for(let i=0;i<4;i++){//4 times
            let objeto = new Object()
            objeto.nome = prompt(`Informe o nome do time:`)
            objeto.estado= prompt(`Informe o estado do time:`)
            objeto.media = 0 
            vet.push(objeto)
            mat[i] = []// cada linha da matriz é um vetor
            alert(`Informe a pontuação de cada time em cada rodada. `)
            for(let j=0;j<3;j++){ // 3 pontuaçoes desse time nas 3 rodadas
                mat[i][j] = Number(prompt(`Informe a pontuação do time ${objeto.nome} na rodada ${j+1}: `))
            }
    
        }
    }

    function calculaMediapontuacao(mat, vet){ 
        for(let i=0;i<4;i++){ // para cada time
            for(let j=0;j<3;j++){ // para cada pontuação
                // soma no vetor na posição i
               vet[i].media = vet[i].media + mat[i][j] // acabou a soma
            }
            vet[i].media = vet[i].media/3 // calculando a média
        }
        console.log(vet)
    }
    function calcularMaiorpontuacao(matriz, vetor){
        for(let j=0;j<3;j++) {// para cada rodada
            let maisPontos = mat[0][j]
            let nomeTimeMaisPontos = vet[0].nome
            for(let i=0.i<4;i++){//para cada time
                if(mat[i][j] > maisPontos){
                    maisPontos = mat[i][j]
                    nomeTimeMaisPontos = vet[i].nome
                }

            }
            console.log(`O tima ${nomeTimeMaisPontos} foi o que fez mais pontos com ${maisPontos} pontos na rodada ${j+1}`)
        }
    }
}