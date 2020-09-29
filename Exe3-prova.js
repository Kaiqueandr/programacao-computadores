chefe()

function chefe(){
    
    let vetor1 = []  //pessoa
    let vetor2 = []  //imovel

do{
    let opcao = Number(prompt(`Escolha [1]Cadastras pessoa - [2]Cadastrar imóvel - [3]Informar RG e calcular - [4]Calcular pessoa com imovel mais caro - [5]Sair.`))
    switch(opcao){
    case 1: cadastrapessoa(vetor1) // cadastra pessoa
        break
    case 2: cadastraimovel(vetor2) // cadastra imovel
        break
    case 3: Informarrg(vetor1, vetor2)
        break
    case 4:calculamaiorimovel(vetor1, vetor2)
        break
    case 5: console.log(`Obrigado !`)//saindo
    default: console.log(`Número incorreto !`)
    }
}
while (opcao != 5)
   
    function cadastrapessoa(pessoas){ 
            let pessoa = new Object()
            pessoa.rg  = Number(prompt(`Informe o número do RG (SOMENTE NÚMEROS): `))
            pessoa.cpf = Number(prompt(`Informe o número do CPF (SOMENTE NÚMEROS): `))
            pessoa.nome = prompt(`Informe o nome da pessoa: `)
            pessoas.push(pessoa)
            }
    function cadastraimovel(imoveis){ 
        let imovel = new Object()
        imovel.codigo  = Number(prompt(`Informe o código do imovel: `))
        imovel.endereco = prompt(`Informe o endereço do imovel : `)
        imovel.valor = Number(prompt(`Informe o valor do imovel: `))
        imovel.tipo = prompt(`Informe o tipo do imovel `)
        imovel.tamanho = Number(prompt(`Informe o tamanho do imovel (EM M²): `))
        imovel.dono = Number(prompt(`Informe o RG do dono do imovel (SOMENTE NÚMEROS): `))
        for(let i=0; i < pessoas.length;i++){
            if(pessoas[i].rg != imovel.dono){
                console.log(`RG ainda não cadastrado, cadastro cancelado !`)
                return 0
            }
        }
        imoveis.push(imovel)
    }
    function Informarrg(imoveis){
        let rg = Number(prompt(`Informe um RG para saber o valor total em imovel desta pessoa: `))
        let soma = 0

        for(let i=0; i < imoveis.length;i++){
            if(imoveis[i].rg == rg){ // confirmando o rg no vetor
                soma = soma + imoveis[i].valor //somando os valores dos  imoveis dessa pessoa
             }      
         }
        console.log(`O valor total de imóveis dessa pessoa é ${soma}`)
    }

    function calculamaiorimovel(imoveis, pessoas){
        let cpfmaior = 0
        for(let i=0; i < imoveis.length;i++){
            if(imoveis[i].valor > 0){
                cpfmaior = imoveis[i].cpf
            }
        }
        console.log(`O CPF da pessoa que possui o imóvel mais caro é o : ${cpfmaior}`)

    }
}