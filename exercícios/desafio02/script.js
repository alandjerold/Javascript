function carregar(){
var hora = document.getElementById('hora')
var img = document.getElementById('foto')
var dia = new Date()
var agora = dia.getHours()
hora.innerHTML= (`Agora são ${agora} horas`)

if(agora >= 5 && agora <= 12){
 img.src= 'manha.png'
 document.body.style.background = '#fee477'
}
else if(agora >=12 && agora <= 18){
    img.src = 'tarde.png'
    document.body.style.background = '#feb330'
    
}
else{
    img.src= 'noite.png'
    document.body.style.background = '#332020'
}
}