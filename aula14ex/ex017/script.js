function calcular(){
    let tnum = document.querySelector('input#txtnum')
    let tabela = document.querySelector('select#slctab')
    let enumc = document.querySelector('h1#valor')
    let num = Number(tnum.value)
    if(num != ''){
        tabela.innerHTML = ''
        enumc.innerHTML = `Tabuada do ${num}`
        for(var i = 0; i <= 10; i++){
            let item = document.createElement('option')
            item.text = `${num} x ${i} = ${num*i}`
            item.value = `tabela${i}`
            tabela.appendChild(item)
        }
    }else{
        alert('Por favor, digite um número acima!')
    }
}