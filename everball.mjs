import io from "socket.io-client";

function everball(credentials, room, roomPassword, play) {
    const socket = io("http://everball.net:3000");
    let field, server_state;

    socket.on("connect", () => {
        console.log(`connect: socket.id = ${socket.id}`);
        socket.emit("login", {name: credentials.name, password: credentials.password});
    });

    socket.on("server_message", (msg) => {
        console.log(`server_message: ${msg}`);
        if (msg.indexOf('Logged in as') !== -1) {
            socket.emit("join_room", {name: room, password: roomPassword});
        }
    });

    socket.on("match_start", (msg) => {
        console.log(`match_start: ${JSON.stringify(msg)}`);
        let cap_num = 1;
        field = msg;
        function run() {
            if (!server_state) return;
            let action = play(field, server_state, cap_num);
            socket.emit("client_input", action);
            cap_num = (cap_num % 3) + 1;
        }
        run();
        setInterval(run, 1334);
    });

    socket.on("server_state", (msg) => {
        //console.log(`server_state: ${JSON.stringify(msg)}`);
        server_state = msg;
    });

}

export default everball;