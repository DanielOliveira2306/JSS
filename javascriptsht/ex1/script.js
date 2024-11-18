function carregar(){

var agora = new Date()
var horario = agora.getHours()
var min = agora.getMinutes()
var resp = document.getElementById('res')
var hora = document.getElementById('bom')
var corpo = document.body
var img  = document.getElementById('img')

resp.innerHTML = `Agora são ${horario}:${min}`

if(horario > 5 && horario < 12){
    hora.innerHTML = 'Bom dia'
    corpo.style.backgroundColor = 'lightblue'
    img.src = 'imagens/dia.jpg'
}else if(horario > 11 && horario < 18){
    hora.innerHTML = 'Boa tarde'
    corpo.style.backgroundColor = 'Orange'
    img.src = 'imagens/noite.jpg'
}else if(horario > 17 && horario < 24){
    hora.innerHTML = 'Boa noite'
    corpo.style.backgroundColor = 'gray'
    img.src = 'imagens/noiteofc.jpg'
}
}