function contar(){
    var tinicio = document.querySelector('input#txtinicio')
    var inicio = Number(tinicio.value)
    var tfim = document.querySelector('input#txtfim')
    var fim = Number(tfim.value)
    var tpasso = document.querySelector('input#txtpasso')
    var passo = Number(tpasso.value)
    var resultado = document.querySelector('div#res')
    resultado.innerHTML = ''
    if(inicio == '' || fim == '' || passo == ''){
        resultado.innerHTML = 'Impossível contar, um ou mais campos estão vazios!'
    } else {
        if(passo <= 0){
            alert('Impossivel contar com passo ZERO, alterando para passo UM...')
            passo = 1
        }
        if (inicio <= fim) {
            for(var i = inicio; i <= fim; i += passo){
                resultado.innerHTML += `${i} &#128073 `;
            }
        } else {
            for(var i = inicio; i >= fim; i -= passo){
            resultado.innerHTML += `${i} &#128073 `;
            }
        }
        resultado.innerHTML += '&#127937'
    }
}
