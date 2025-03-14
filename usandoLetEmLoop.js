//for(let i = 0; i <10; i++){
//    console.log(i)
//}
//console.log('i = ', i) //O erro acontece porque foi declarado com LET, que não é possivel ser visto fora do escopo

console.log('')
console.log('Outro exemplo...')
console.log('')

const func = []

for (let i = 0; i < 10; i++) {
    func.push(function(){
        console.log(i)
    })
}
// Isso acontece porque o LET está dentro do escopo, mas será revisto mais na frente do curso
func[2]()
func[8]()
