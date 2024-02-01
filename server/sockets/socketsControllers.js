


const users = {}

export const socketController = (socket,io) => {
    console.log('cliente conectado',socket.id)
 
    //recibe username(desde el cliente)
    socket.on('newUser',(username)=>{
     console.log('recibiendo el usuario',username)
     //le asigno a user[socket.id] el valor de username
     users[socket.id] = username;
        //emite envia al cliente ya vinculado con el id 
        io.emit('userConnected',username); 

    })

    //recibiendo mensaje del ladod el cliente
    socket.on('chatMessage',(message)=>{
        console.log(' recibido backend ', message)
        //a username le doy el valor que capture con el users[socket.id], que es el nombre  ,
     const username = users[socket.id];
        console.log('username',users)
     io.emit('message', {username,message})

    })

}