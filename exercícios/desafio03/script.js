function contar(){


var inicio = document.getElementById('inicio')
var fim = document.getElementById('fim')
var pular = document.getElementById('pular')
var res = document.getElementById('res')
    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(pular.value)
   

 if(inicio.value == 0 || fim.value == 0 || pular.value == 0 ){
    window.alert('[Erro] FALTAM DADOS!')

  
}

   
else if(i > f ) {
    for(var c = i; c >= f; c -= p){
        res.innerHTML += (`\u{1F449} ${c} `)
    }
    
}
else if (i < f){
    for(var c =i; c <= f; c+= p){
        res.innerHTML += (`\u{1F449} ${c}`)
    }
}
}