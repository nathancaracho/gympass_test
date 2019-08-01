const { logObject } = require("./src/transform");

const logList = require("./src/log")(`${__dirname}//assets/race.log`, logObject);
// require("./src/podium")(logList);
console.log(logList);