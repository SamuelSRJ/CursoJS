let num = [5,8,3,9,0]
num[5] = 6
num.push(7)
console.log(`Nosso vetor é o: ${num}`)
num.sort()
console.log(`Nosso vetor ordenado é: ${num}`)
console.log(`O comprimento desse vetor é de ${num.length} posições`)
let pos = num.indexOf(2
)
if(pos != -1){
    console.log(`O número desejado está na posição ${pos}`)
}else{
    console.log(`Número desejado não existe dentro do Array`)
}