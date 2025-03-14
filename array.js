const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4]) //undefined porque não existe
valores[4] = 10
console.log('Array:')
console.log(valores)
console.log('Quantidade de valores no array:')
console.log(valores.length)

//Para add novos valores no array usamos push
valores.push({id: 3}, false, null, 'teste')
console.log(valores)

//Para RETIRAR o ultimo valor do array usamos o pop
console.log(valores.pop())
delete valores[0] //Podemos deletar o valor do Array e deixando o lugar dele vazia na lista
console.log(valores[0])
console.log(valores)

console.log(typeof valores) //O array é do tipo object