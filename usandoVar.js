{
    {
        {
            { 
                var sera = 'Será???' 
                console.log(sera)
            }
        }
    }
}
console.log(sera)
//Aqui é possivel acessar a variavel porque ela esta dentro do 'main' e não dentro de uma função, de uma funcao 


function teste(){
    var local = 123
    console.log(local)
}

teste()
//console.log(local) // erro porque a variacel foi declarado dentro de uma função, logo não é uma variavel global
