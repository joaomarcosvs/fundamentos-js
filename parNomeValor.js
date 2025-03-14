const saudacao = 'Olá' // esta em nivel arquivo 

function exec() {
    const saudacao = 'Fala' // esta em nivel funcao por isso pode ser declarada novamente
    return saudacao
}
// Objetos são grupos aninhados de pares nomes/valor

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 82,
    endereco: {
        logradouro: 'Rua Marechal Floriano',
        numero: 123,
        bairro: 'Centro',
        cidade: 'Terra de Areia'
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)