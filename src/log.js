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

    const parseLogToJSON = (row, header) => {
        let logObject = {};
        const headerNameList = Object.getOwnPropertyNames(header);
        const splitedRow = row.split(/(?<=[\w+|\d+])\s+(?=[\w+|\d+])/g);

        if (!splitedRow.length)
            throw "The file not in correct format";

        splitedRow.forEach((attrValue, index) => {
            if (headerNameList.length - 1 >= index) {
                const headerName = headerNameList[index];
                const headerTransform = header[headerName];

                if (typeof headerTransform === "function")
                    logObject = Object.assign(logObject, headerTransform(attrValue));
                else
                    logObject[headerName] = attrValue;
            }
        });
        return logObject;
    }
    const log = (filePath, header) => {
        let logList = [];
        const logFile = getLogFile(filePath);
        logFile.split(/\n/).forEach((row, index) => {
            if (index)
                logList.push(parseLogToJSON(row, header));
        });

        return logList;
    }

    module.exports = log;
})();