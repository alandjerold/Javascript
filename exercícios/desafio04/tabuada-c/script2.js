function tabuada(){
var n1 =document.getElementById('n1')
var area = document.getElementById('res')
var n = Number(n1.value)
var c = 1

if(n == 0){
    window.alert('Insira um número válido')
}
else{
    area.innerHTML= ''
    while(c <=10){
        var item = document.createElement('option')
        area.appendChild(item)
        
        item.text= (`${c} x ${n} = ${c*n}`)
        c++
    }
}
}