function carregar(){
    var msg = document.getElementById('msg')
    var foto = document.getElementById('foto')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 19
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora <= 12 ){
        //Bom dia!
        foto.innerHTML = '<img src="Manhã.jpg">'
        document.body.style.background = '#e5e619'
    }else if(hora > 12 && hora <= 18 ){
        //Boa Tarde!
        foto.innerHTML = '<img src="Tarde.jpg">'
        document.body.style.background = '#ff8133'
    }else{
        //Boa Noite!
        foto.innerHTML = '<img src="Noite.jpg">'
        document.body.style.background = '#002ebd'
    }
}