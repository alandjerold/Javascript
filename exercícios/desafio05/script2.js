
    var n1 = document.getElementById('n1')
    var res = document.getElementById('res')
    var res2 = document.getElementById('res2')
    var valores = []
    
    
    function isnumber(n){
        if(n >= 1 && n <= 100){
            return true
        }
        else{
            return false
        }
    }
    function list(n, v){
        if(v.indexOf(Number(n)) != -1){
        return true
        
    }
    else{
        return false
    }
    }
    

function adicionar(){
    if(isnumber(n1.value) && !list(n1.value, valores) ){
        valores.push(Number(n1.value))
        var item = document.createElement('option')
        res.appendChild(item)
        
        item.text = (`Valor ${n1.value} adicionado`)
        res2.innerHTML = ''
        
    }
    else  {
        window.alert('Erro')
        
    
}
    n1.value = ''
    n1.focus()
    //usado para não ter que clicar na caixa do numero para ter que escrever
    //após add um numero ele apaga o numero que esta escrito na barra de numero
}

function somar(){
    if(valores.length == 0 ){
        window.alert('Erro')
    }
    else{
        var tota = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media = 0
        
        for(var aps in valores){
            if(valores[aps] > maior)
            maior = valores[aps]
            if(valores[aps] < menor)
            menor = valores[aps]
            soma += valores[aps]

            media = soma / tota
            
        }
        res2.innerHTML =(`<p>Estão cadastrados ${tota} valores</p>`)
        res2.innerHTML +=(`<p>O valor maior é o ${maior}</p>`)
        res2.innerHTML += (`<p>O valor menor é o ${menor}</p>`)
        res2.innerHTML += (`<p>A soma dos valores é de ${soma}</p>`)
        res2.innerHTML += (`<p>A média é de ${media}</p>`)
    }
}
