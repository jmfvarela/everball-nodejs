import everball from "./everball.mjs";
import credentials from "./credentials.mjs";

const room = "<Indica aquí la sala>";
const roomPassword = "<Indica aquí la contraseña de la sala (si es el caso)>";

everball(credentials, room, roomPassword,
    (field, server_state, cap_num) => {
        let angle = anguloEntreJugadorYPelota(field, server_state, cap_num);
        let force = 1.2;            
        console.log(`cap_num: ${cap_num}, angle: ${angle}, force: ${force}`);
        return {cap_num: cap_num, angle: angle, force: force};
    }
);

function anguloEntreJugadorYPelota(field, server_state, cap_num) {
    let team = (field.role === 1) ? server_state.team_1 : server_state.team_2;
    let diffX = server_state.ball.x - team[cap_num-1].x;
    let diffY = server_state.ball.y - team[cap_num-1].y;
    return Math.atan2(diffY, diffX) * 180 / Math.PI;
}

