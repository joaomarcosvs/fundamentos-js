const a = {name: 'teste'}
console.log(a)

const b = a
console.log(b)
b.name = 'opa'
console.log(a) //mudei apartir de b, que armazena o endereço de a, logo tudo que eu mudar em b o a vai perceber a mudança e vise-versa

let c = 3
let d = c
d++
//aqui o d recebe o valor de c e não o endereço porque c não é um objeto e sim um tipo primitivo 
console.log(d)
console.log(c)

let valor //não inicializada, logo undefined
console.log(valor) 

valor = null //ausencia de valor ou não apontar para nenhum endereço de valor
console.log(valor) //null = não há valor, undefined = valor não declado, há uma diferença porque no null vocÊ declarou que não há valor
//console.log(valor.toString()) dá erro

