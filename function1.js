//func sem retorno
function imprimirSoma(a,b){
    console.log(a+b)
}

imprimirSoma(2,3) // 5
imprimirSoma(2) //Nan
imprimirSoma(2,3,4,5,6,7,8) //Vai pegar somente o A e o B
imprimirSoma() //Nan

//func com retorno

function soma (a, b =0){
    return a+b
}

//Esta dentro de console porque ele tem retorno!
console.log(soma(2,3)) // 5
console.log(soma(2)) // vai apareer somente 2, porque b foi declarado como 0
console.log(soma()) //Nan