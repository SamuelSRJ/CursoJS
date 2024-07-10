var vetor = []
function adicionar(){
    let tnum = document.querySelector('input#txtnum')
    let lista = document.querySelector('select#slclist')
    let num = Number(tnum.value)
    if (num === ''){
        window.alert('Campo de entrada vazio. Insira um número valido!')
    } else if (num < 1 || num > 100){
        window.alert('Valor inválido!')
    } else if (validar(num) != -1){
        window.alert('O número já foi adicionado a lista')
    } else {
        vetor.push(num)
        let item = document.createElement('option')
        item.text = `Valor ${num} adicionado.`
        lista.appendChild(item)
    }
}

function validar(n){
    return vetor.indexOf(n)
}