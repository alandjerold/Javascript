function calcular(){

var n1 = document.getElementById('n1')
var res = document.getElementById('res')
var n = Number(n1.value)



if(n == 0){
    window.alert('[Erro] insira um número')
}
 else {
    
    for(var c =1; c <=10; c++){
        
    res.innerHTML +=(`${n} x ${c} = ${n*c} <br>`)
 }

 }
}