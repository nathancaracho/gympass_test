const { writeFileSync } = require('fs');
const { logObject } = require('./src/transform');
const logList = require('./src/log')(`${__dirname}//assets/race.log`, logObject);
const podium = require('./src/podium')(logList);
let podiumFile = 'name,position,total time lap\n';
podium.forEach((driver, index) => {
  podiumFile += `${driver.name},${index + 1},${driver.timeLap}\n`;
});
writeFileSync('C:\\Users\\n.branco.caracho\\Desktop\\teste.csv', podiumFile);
