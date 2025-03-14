for(var i = 0; i <10; i++){
    console.log(i)
}
// Nessa caso o i vai ser impresso na tela sim porque foi declaracom var que é visivel dentro de escopo, diferente do let
// Oque tem que ser entedido aqui é que se fosse declaro em LET, não seria possivel imprimi-lo apos o for
console.log('i = ', i)

console.log('')
console.log('Outro exemplo...')
console.log('')

const func = []

for (var i = 0; i < 10; i++) {
    func.push(function(){
        console.log(i)
    })
}

func[2]()