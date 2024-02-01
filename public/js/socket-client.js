const socket = io()
let contador = 0
const online = document.querySelector('#online')
const offline = document.querySelector('#offline')

console.log('hola mundo')
socket.on('connect', ()=> {
    console.log('conectado')
    online.style.display = ''
    offline.style.display = 'none'
});
socket.on('disconnect', ()=> {
    console.log('desconectado del servidor')
    console.log('conectado')
    online.style.display = 'none'
    offline.style.display = ''
});



const unirse = () => {
    console.log('hola mundo')
    const valor = document.getElementById('username')
    const nombre = document.querySelector('h2')
    const value = valor.value
    valor.value=''
    console.log('este es el valor',value)
    nombre.innerHTML=`${value}`
    socket.emit('newUser',value)
}

const mandarMensaje = () => {
    let mens = document.getElementById('message')
    const mensajeFront = mens.value
    mens.value = ""
    console.log(mensajeFront)
    socket.emit('chatMessage',mensajeFront)

}

socket.on('message',data => {
    console.log('recibiendo desde el backend',data)
    const chatMessage = document.querySelector('.chat-messages')
    const messageElement = document.createElement("div")
    messageElement.classList.add('mensajesChat')
    messageElement.innerHTML= `<strong>${data.username}:</strong>${data.message}`
    chatMessage.appendChild(messageElement)
    contador ++
    const oldMessage = document.querySelectorAll('.chat-messages > div')
      if (contador > 9 ){
        oldMessage[0].remove()
      }
})