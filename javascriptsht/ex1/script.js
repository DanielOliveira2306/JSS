function carregar(){

var agora = new Date()
var horario = agora.getHours()
var min = agora.getMinutes()
var seg = agora.getSeconds()
var mili = agora.getMilliseconds()
var resp = document.getElementById('res')
var hora = document.getElementById('bom')
var corpo = document.body

resp.innerHTML = `Agora são ${horario}:${min}:${seg}:${mili}`

if(horario > 5 && horario < 12){
    hora.innerHTML = 'Bom dia'
    corpo.style.backgroundColor = 'lightblue'
}else if(horario > 11 && horario < 18){
    hora.innerHTML = 'Boa tarde'
    corpo.style.backgroundColor = 'Orange'
}else if(horario > 17 && horario < 24){
    hora.innerHTML = 'Boa noite'
    corpo.style.backgroundColor = 'gray'
}
}