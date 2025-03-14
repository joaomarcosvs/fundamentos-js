const prod1 ={} //par de chaves representa um objeto
prod1.nome = 'Celular Top' //Atribui um nome de forma dinamica
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40//Evitar atribuir valores desse jeito

console.log(prod1)

const prod2 = {
    nome:  'Camisa Polo',
    preco: 79.99,
    marca: 'Lacoste',
    categoria: {
        tecido: 'algodao',
        localDeFabricacao: 'França',
    },
    tamanho: 'M'
}

console.log(prod2)