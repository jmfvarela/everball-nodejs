## Requisitos previos
* Node.js v10.0.0 o superior
* npm 5.6.0 o superior

## Instalar dependencias
```
npm install
```

## Configuración
Date de alta como usuario en [everball](http://everball.net/juego).

Configura tu usuario y contraseña en credentials.mjs.
```
export default {
    name: "<Indica aquí nu nombre de usuario>",
    password: "<Indica aquí tu contraseña>"
};
```
Configura el nombre de sala y la contraseña de la sala (si es el caso) en index.mjs. 

Si vas a ser el primero en entrar a la sala ponle el nombre y contraseña que quieras. Si vas a entrar en una sala creada por otro jugador indica el nombre y contraseña con el que la haya creado.
```
const room = "<Indica aquí la sala>";
const roomPassword = "<Indica aquí la contraseña de la sala (si es el caso)>";
```

## Jugar
```
npm start
```
El otro jugador puede ser un algoritmo o un humano.
Y puede entrar antes o después que tú.

La salida de la consola si no hay ningún error debe ser similar a esta:
```
connect: socket.id = e9af395d-bc93-413b-bb28-988fd7ba4484
server_message: Logged in as 'robotto'
server_message: Created room 'amistoso'
server_message: Joined room 'amistoso'
server_message: You are player 1 (right side)
```
Y ahora a modificar tu algoritmo en index.js para conseguir una estrategia ganadora... :-)
¡Suerte!