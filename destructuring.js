// novo recurso no ES2025

const pessoa = {
    nome: 'Joao',
    idade: '19',
    endereco: {
        rua: 'rua marechal',
        numero: 3929,
    }
}

const { nome, idade} = pessoa // leitura da linha, tire as atribuições de nome e idade do objeto pessoa
console.log(nome, idade) 

const { nome: n, idade: i} = pessoa
console.log(n, i)

const { endereco: { rua, numero, cep}} = pessoa // aqui nada mais que criando uma variavel com o nome e o valor que esta no objeto
console.log(rua, numero , cep)
