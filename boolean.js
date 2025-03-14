let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1 //valor de true em numero
console.log(!!isAtivo) //usando a negação o numero vira não não verdadeiro, logo 1 = true

//segue a logica, se por apenas uma negação vira não verdadeiro, logo 1 = false
console.log(!isAtivo)

console.log('Os verdadeiros...')
//Todos os interios são verdadeiros, menos o 0
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo=true))

console.log('Os falsos são...')
console.log(!!0)
console.log(!!'') //String vazia é difenre de uma string com espaço(que é um caractere)
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo=false)) // Se ao lado da negação não não for falso, será falso tmb

console.log('Para finalizar...')
console.log(!!('' || null || 0 || ' ')) // Pelo menos uma das condiçoes é verdadeira porque as condiçoes estão entre ||(ou)
console.log(!!('' || null || 0 || 'epa' || 123)) // Será imprimido o primeiro valor verdadeiro

var nome = ''
console.log(nome || 'Desconhecido') //Serve para saber se o nome recebeu um valor ou não, porque o uma string vazia é falsa

var nome = 'Joao'
console.log(nome || 'Desconhecido') 