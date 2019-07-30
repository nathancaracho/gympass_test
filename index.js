// Hora                               Piloto             Nº Volta   Tempo Volta       Velocidade média da volta
const log = require("./src/log")(`${__dirname}//assets/race.log`, ["hour", "driver", "numLap", "timeLap", "mediumLapVelocity"]);
console.log(log);