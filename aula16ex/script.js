var vetor = []
var res = document.querySelector('p#res')
function adicionar(){
    res.innerHTML = ''
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
        lista.size = '10'
        vetor.push(num)
        let item = document.createElement('option')
        item.text = `Valor ${num} adicionado.`
        lista.appendChild(item)
    }
}

function validar(n){
    return vetor.indexOf(n)
}

function finalizar(){
    let vetclone = vetor
    if(vetor == ''){
        window.alert('Impossível finalizar. A lista está vazia!')
    } else {
        vetclone.sort()
        let soma = 0
        for(i = 0; i < vetclone.length; i++){
            soma += vetclone[i]
        }
        res.innerHTML = 
        `Ao todo, temos <strong>${vetor.length}</strong> números cadastrados.<br>
        O maior valor informado foi <strong>${vetclone[vetclone.length -1]}</strong><br>
        O menor valor informado foi <strong>${vetclone[0]}</strong><br>
        Somando todos os valores temos <strong>${soma}</strong><br>
        A média dos valores informados é <strong>${soma/vetclone.length}</strong>`
    }
}