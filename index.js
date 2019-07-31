const logObj = { "hour": null, "driver": null, "numLap": null, "timeLap": null, "mediumLapVelocity": null };

const logList = require("./src/log")(`${__dirname}//assets/race.log`, logObj);

console.log(logList);