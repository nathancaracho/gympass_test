(() => {
    'use strict';
    const fs = require("fs");
    const getLogFile = filePath => {
        try {
            const file = fs.readFileSync(filePath, "utf-8");
            if (!file)
                throw `The file can not be empty`;
            return file;

        } catch (error) {
            throw `An error has occurred when try read log file: ${error}`;
        }
    }

    const parseLogToJSON = (row, headerList) => {
        let logObj = {};
        const splitedRow = row.split(/(?<=[\w+|\d+])\s+(?=[\w+|\d+])/g);

        if (!splitedRow.length)
            throw "The file not in correct format";

        splitedRow.forEach((attrValue, index) => {
            if (headerList.length - 1 >= index)
                logObj[headerList[index]] = attrValue;
        });
        return logObj;
    }
    const log = (filePath, header) => {
        let logList = [];
        const logFile = getLogFile(filePath);
        logFile.split(/\n/).forEach((row, index) => {
            if (index)
                logList.push(parseLogToJSON(row, Object.getOwnPropertyNames(header)));
        });

        return logList;
    }

    module.exports = log;
})();