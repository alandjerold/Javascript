function adicionar(){
    var n1 = document.getElementById('n1')
    var res = document.getElementById('res')
    var res2 = document.getElementById('res2')
    var c = 1
    var n = Number(n1.value)
    var r = Number(res.value)

    if(n > 100 && n !== r ){
        window.alert('[Erro] número já inserido ou número inválido')
    }
    
     else if(n <= 100){
        var item = document.createElement('option')
        res.appendChild(item)
        item.innerHTML=(`Valor ${n} adicionado`)
            
     }
     
     function somar(){
        if(res>=1){
            
            res2.innerHTML(`a${res}`)

        }
    }
}
