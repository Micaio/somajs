function clicar(){
    var n1 = window.document.getElementById('iNumero1')
    const n2 = window.document.getElementById('iNumero2')
    const fn1 = Number.parseInt(n1.value)
    const fn2 = Number(n2.value)
    var  resultado = window.document.getElementById('resu')
    var ss = fn1 + fn2
    resultado.innerHTML = `A soma de ${fn1} + ${fn2} é =  ${ss}`
    }