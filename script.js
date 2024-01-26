function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (formAno.value.length == 0 || Number(formAno.value) > ano) {
        window.alert('ERRO! -> Verifique os dados e tente novamente!')
    } else{
        var formSex = document.getElementsByName('radsex')
        var idade = ano - Number(formAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (formSex[0].checked) {
            genero = 'Homem'
            document.body.style.background = '#1989e9'
            if (idade >= 0 && idade <= 2) {
                //Bebe
                img.setAttribute('src', 'Bebe-Homem.png')
            } else if (idade > 2 && idade < 14) {
                //Criança
                img.setAttribute('src', 'Crianca-Homem.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'Jovem-Homem.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'Adulto-Homem.png')
            } else if (idade >= 50 && idade < 123) {
                //Idoso
                img.setAttribute('src', 'Idoso-Homem.png')
            } else{
                //Dinossauro
                img.setAttribute('src', 'Dinossauro-Homem.png')
                document.body.style.background = '#30621c'
            }
        } else if (formSex[1].checked) {
            genero = 'Mulher'
            document.body.style.background = '#fea1ff'
            if (idade >= 0 && idade <= 2) {
                //Bebe
                img.setAttribute('src', 'Bebe-Mulher.png')
            } else if (idade > 2 && idade < 14) {
                //Criança
                img.setAttribute('src', 'Crianca-Mulher.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'Jovem-Mulher.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'Adulto-Mulher.png')
            } else if (idade >= 50 && idade < 123){
                //Idoso
                img.setAttribute('src', 'Idoso-Mulher.png')
            } else{
                //Dinossauro
                img.setAttribute('src', 'Dinossauro-Mulher.png')
                document.body.style.background = '#30621c'
            }
        }
        if (idade < 123){
            res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        } else{
            res.innerHTML = `Detectamos um Dinossauro ${genero} com ${idade} anos`
        }
        res.appendChild(img)
    }
}