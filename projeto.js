//               0           1             2             3           4          5          6           7
const nomesCafes = ["Expresso", "Cappuccino", "Latte Macchiato", "Mocha", "Americano", "Ristretto", "Affogato", "Irish Coffee"]
const precosCafes = [8       ,     12      ,        15        ,    14   ,      9     ,     10     ,     18    ,       22     ]

function mostrarCardapio(){
    let contador = 0
    while(contador < nomesCafes.length){
        console.log(nomesCafes[contador] + " - R$ " + precosCafes[contador])
        contador = contador + 1
    }
    console.log("################################################")
}

// Adicionar novos elementos na lista
function adicionarCafe(nomeCafe, precoCafe){
    nomesCafes.push(nomeCafe)
    precosCafes.push(precoCafe)
}

// Remover um item pelo índice
function removerCafe(indice){
    nomesCafes.splice(indice, 1)
    precosCafes.splice(indice, 1)
}

mostrarCardapio()
adicionarCafe("Café com Leite", 10)
mostrarCardapio()
removerCafe(1)
mostrarCardapio()