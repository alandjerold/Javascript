function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var res = document.getElementById('res')
    var fano = document.getElementById('fano')
    var sexo = document.getElementsByName('sexo')
    var idade = ano - fano.value
    var genero =''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (fano.value == 0 || fano.value > ano){
        window.alert('ERRO')
    }
    else if (sexo[0].checked ){
        genero = 'Mulher'

        if(idade >=0 && idade <10){
            //criança//
            img.setAttribute('src', 'criança-f.png')
        }
        else if(idade <21){
            //jovem//
            img.setAttribute('src', 'jovem-f.png')
        }
        else if(idade <50){
            //Adulto//
            img.setAttribute('src', 'adulto-f.png')
        }
        else {
            //idoso//
            img.setAttribute('src', 'idosa-f.png')
        }

        }
        else if (sexo[1].checked){
            genero = 'Homen'

            if(idade >=0 && idade <10){
                //criança//
                img.setAttribute('src', 'criança-m.png')
            }
            else if(idade <21){
                //jovem//
                img.setAttribute('src', 'jovem-m.png')
            }
            else if(idade <50){
                //Adulto//
                img.setAttribute('src', 'adulto-m.png')
            }
            else {
                //idoso//
                img.setAttribute('src', 'idoso-m.png')
            }

        }
        
        res.innerHTML= (`Verificado, ${genero} com ${idade} anos`)
        res.appendChild(img)
    }

