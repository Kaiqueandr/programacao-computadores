chefe ( )

função  chefe ( ) {
    // Vetor escopo local
    let  vendedores  =  [ ]
    deixe  opcao 
    faça  {
        let  opcao  =  Número ( prompt ( `/ n [1] -cadastrar vendedor / n [2] - cadastra venda / n [3] - / n [4] - / n [6] - / n [5] - sair` ) )
        switch ( opcao ) {
            caso  1 :   cadastraVendedor ( vendedores )  // essa passagem é por referência e torna o escopo global
            pausa
            caso  2 : cadastraVendedor ( vendas ,  vendedores )
            pausa
            caso  3 : consultavendas ( vendas )
            pausa
            caso  4 : consultaVendasFuncionario ( vendas )
            pausa
            caso  5 : consultaVendedorMes ( vendas )
            pausa
            caso  6 : consultaMes ( vendas )
            caso  7 : console . log ( `tchau` )
            padrão : console . log ( `erro` )
        }

    }
    enquanto ( opcao ! = 7 )
}

function  consultaMes ( vdas ) {
    deixe  meses  =  [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ]
    // vamos preencher o vetor com as somas
    para ( deixe  i  =  0 ; i <  vdas . comprimento ; i ++ ) {
       deixe  posicao  =  vdas [ i ] . mes  - 1  // descubro a posição para colocar
       meses [ posicao ]  =  meses [ posicao ]  +  vdas [ i ] . valor  // acumula valor
    }
    let  maiorValor  =  meses [ 0 ]  // assumo que é janeiro
    para ( seja  i = 0 ; i < meses . comprimento ; i ++ ) {
        if ( meses [ i ]  >  maiorValor ) {
            maiorValor  -  meses [ i ]
        }
    }
    // encontra a posição do maior valor vendido
    deixe  posicao  =  meses . indexOf ( maiorValor )
    console . log ( `O dia que mais vendeu $ { posicao + 1 } ` )
}

function  consultaVendedorMes ( vdas ) {
    deixe  mes  =  Número ( prompt ( "informe o mes" ) )
    let  maiorVenda  =  0
    deixe  vendedorMaisVendeu  =  0
    para ( deixe  i  =  0 ; i  <  vdas . comprimento ; i ++ ) {
        if ( vdas [ i ] . mes  ==  mes ) {
            maiorVenda  =  vendas [ i ] . valentia
            vendedorMaisVendeu  =  vdas [ i ] . vendedor
        }
    }
    console . log ( `vendedor com mais vendas $ { vendedorMaisVendeu } ` )
}

function  consultaVendasFuncionario ( vdas ) {
    let  vendedor  =  Number ( prompt ( `informe o código do vendedor` ) )
    deixe  soma  =  0
    // percorre o vetor de vendas
    para ( deixe  i  =  0 ; i  <  vdas . comprimento ; i ++ ) {
        if ( vdas [ i ] . vendedor  ==  vendedor ) {  // encontrei a venda do vendedor
            soma  =  soma  +  vdas [ i ] . valentia
        }
    }
    console . log ( `a soma das vendas é $ { soma } ` )
}

function  consultavendas ( vdas ) {
    let  vendedor  =  Number ( prompt ( `informe o código do vendedor` ) )
    let  mes  =  Number ( prompt ( `informe o mês da venda` ) )
    // percorre o vetor de vendas
    para ( deixe  i  =  0 ; i  <  vdas . comprimento ; i ++ ) {
        if ( ( vdas [ i ] . vendedor  ==  vendedor )  &&  ( vdas [ i ] . mes  ==  mes ) ) {  // encontrei a venda do vendedor naquele mes
            console . log ( `valor da venda $ { vdas [ i ] . valor } ` )
            return  // sai da função
        }
    }
    console . log ( `não existe venda para este funcionário neste mês` )
}

função  cadastraVendedor ( vendido ) {  // representante vendido o vetor vendedores
    let  objeto  =  new  Object ( )
    objeto . codigo  =  Número ( prompt ( `informe o código do vendedor` ) )
    objeto . nome  =  prompt ( `informe seu nome` )
    // verifica se o nome ja existe
    para ( deixe  i  =  0 ; i  <  vended . lenght ; i ++ ) {
        if ( vendido [ i ] . codigo  ==  objeto . codigo ) {
            console . log ( `cadastro cancelado pois já existe um vendedor com este código` )
            return  // sai da função pois não vai cadastrar
        }
    }
    // insere no vended, mas na verdade insere no vetor vendedores
    vendido . push ( objeto )
}

função  cadastraVendas ( vdas ,  vdes ) {  // vdas representa o vetor vendas, vdes representa o vetor vendedores
    let  objeto  =  novo  objeto
    objeto . codigo  =  Número ( prompt ( `informe código da venda` ) )
    objeto . vendedor  =  Number ( prompt ( `informe o código do vendedor` ) )
    objeto . mes  =  Número ( prompt ( `informe o mês da venda` ) )
    objeto . valor  =  Número ( prompt ( `informe o valor da venda` ) )
    // verifica se o vendedor ja existe
    // percorre o vetor de vendedores (vdes)
    para ( deixe  i  =  0 ; i <  vdes . comprimento ; i ++ ) {
        if ( objeto . vendedor  ==  vdes [ i ] . codigo ) {  // achamos o vendedor
        // verifica se existe venda para este vendedor no mesmo mês- não podemos registrar venda
        // percorre o vetor de vendas
        para ( deixe  j  =  0 ;  j  <  vdas . comprimento ; j ++ ) {
            if ( ( objeto . mes  ==  vdas [ i ] . mes )  &&  ( objeto . vendedor  ==  vdas [ i ] . vendedor ) ) {
                console . log ( `não podemos registrar a venda` )
                return  // sai da função
            }
        }
        // ja percorreu e não achou, então vamos inserir
        // aqui a venda em vdas, que na verdade é vendas
        vdas . push ( objeto )
        console . log ( `venda registrada` )
        Retorna
    }
}
console . log ( `vendedor não existe` )
}