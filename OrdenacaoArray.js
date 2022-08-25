// DESAFIO ORDENAÇÃO ARRAY - SE TIVER NUMERO 0 DENTRO DO ARRAY, REMOVE-LOS

var arrayNumero = []
var contador = 0
var opcao = 0
var arrayAux = []

var continuar = true
while(continuar){
    arrayNumero[contador] = parseInt(prompt(`Insira um numero no array`))
    contador++

    opcao = prompt(`1 - Continuar/ 2 - Encerrar`)
    if(opcao != 1){
        continuar = false
    }
}

console.log(arrayNumero)

for(var atual = 0; atual < contador - 1; atual++){
    for(var seguinte = atual + 1; seguinte < contador; seguinte++){
        if(arrayNumero[atual] == 0){
            arrayNumero[atual] = arrayNumero[seguinte]
            arrayNumero[seguinte] = 0
    }
}
}
console.log("")
console.log(`1º passo, joguei os 0 para o final`)
console.log(arrayNumero)

for(var index = 0; index < contador; index++){
    if(arrayNumero[index] != 0){
        arrayAux[index] = arrayNumero[index]
    }
}
arrayNumero = arrayAux
console.log("")
console.log(`2º passo, usei um array auxiliar para extrair os números diferentes de zero`)
console.log(arrayNumero)



