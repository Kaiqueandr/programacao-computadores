chefe()

function chefe(){
    // declarar a matriz
    let matriz = [] // uma matriz é um vetor
    //criar matriz com 3 linhas
    matriz[0] = []
    matriz[1] = []
    matriz[2] = [] // cada linha da matriz é um vetor
    cadastra(matriz) // cadastrar 3 alunos
//  cadastra(matriz)
// cadastra(matriz)
    consultaMediaAlunos(matriz)    
}

function cadastra(mat){ // mat representa a matriz na função chefe()
    for(let i=0;i<3;i++){//3 alunos
        alert(`Informe as 4 notas do aluno ${i+1} : `)
        for(let j=0;j<4;j++){ // 4 notas de cada aluno
            mat[i][j] = Number(prompt(`Informe a ${j+1}ª nota: `))
        }

    }
}

function consultaMediaAlunos(mat){ // mat representa a matriz na função chefe()
    let medias = [0,0,0]
    for(let i=0;i<3;i++){ // para cada aluno
        for(let j=0;j<4;j++){ // para cada nota dos alunos
            // soma no vetor na posição i
            medias[i] =medias[i] + mat[i][j]
        }
        medias[i] = medias[i]/4
    }
    // acabaram os alunos
    console.log(`Valor das médias`)
    console.log(`Médias igual a ${medias}`)
}

/* EXERCICIOS PARA FAZER - 09/09
    1) ANTES DA ENTRADA DAS NOTAS DE UM ALUNO, SOLICITAR O NOME E O RG DELE
    2) CALCULAR E MOSTRAR A MÉDIA DE CADA PROVA
    3) CALCULAR E MOSTRAR A MAIOR NOTA DE CADA PROVA */