chefe()

function chefe(){
    // declarar a matriz
    let matriz = [] // uma matriz é um vetor
    // Criando vetor de alunos
    let vetor = []
    cadastra(matriz, vetor) // cadastrar 3 alunos
    consultaMediaAlunos(matriz)    
    calculaMediaProvas(matriz)
    calculaMaiorNotaProva(matriz, vetor)
}
function calculaMaiorNotaProva(mat, vet){
    for(let j=0;j<4;j++){
     let maiorNota = mat[0][j] // assumo que a maior nota é do primeiro aluno
     let nomeMaiorNota = vet[0].nome // assumo que o nome do aluno com maior nota é o 1º.
        for(let i=0;i<3;i++){
            if(mat[i][j] > maiorNota){
                maiorNota = mat[i][j] // atualiza a maior nota
                nomeMaiorNota = vet[i].nome // atualiza o nome da maior nota
            }
        }
        console.log(`A prova ${j+1} tem a maior nota ${maiorNota} que é do aluno ${nomeMaiorNota}! `)
    }
}

function calculaMediaProvas(mat){
    for(let j=0;j<4;j++){
        let media = 0
        for(let i=0;i<3;i++){
            media = media + mat[i][j]

        }
    }
}

// mat representa a matriz na função chefe()
// vet representa a matriz na função chefe()
function cadastra(mat, vet){ // mat representa a matriz na função chefe()
    for(let i=0;i<3;i++){//3 alunos
        let objeto = new Object()
        objeto.nome = prompt(`Informe o nome:`)
        objeto.rg= prompt(`Informe o RG:`)
        objeto.media = 0 //vamos considerar que no cadastro a média do aluno é 0
        //insere objeto em vet
        vet.push(objeto)
        mat[i] = []// cada linha da matriz é um vetor
        alert(`Informe as 4 notas do aluno ${objeto.nome} : `)
        for(let j=0;j<4;j++){ // 4 notas de cada aluno
            mat[i][j] = Number(prompt(`Informe a ${j+1}ª nota: `))
        }

    }
}

function consultaMediaAlunos(mat){ // mat representa a matriz na função chefe()
    for(let i=0;i<3;i++){ // para cada aluno
        for(let j=0;j<4;j++){ // para cada nota dos alunos
            // soma no vetor na posição i
           vet[i].media = vet[i].edia + mat[i][j]
        }
        vet[i].media = vet[i].media/4
    }
    // acabaram os alunos
    console.log(vet)
    //console.log(`Médias igual a ${}`)
}

/* EXERCICIOS 
    1) ANTES DA ENTRADA DAS NOTAS DE UM ALUNO, SOLICITAR O NOME E O RG DELE
    2) CALCULAR E MOSTRAR A MÉDIA DE CADA PROVA
    3) CALCULAR E MOSTRAR A MAIOR NOTA DE CADA PROVA 
      GG - */