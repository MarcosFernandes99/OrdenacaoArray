// DESAFIO ORDENAÇÃO ARRAY

var arrayNumero = []
var contador = 0
var opcao = 0

var continuar = true
while(continuar){
    arrayNumero[contador] = parseInt(prompt(`Insira um numero no array`))
    contador++

    opcao = prompt(`1 - Continuar/ 2 - Encerrar`)
    if(opcao != 1){
        continuar = false
    }
}

