(() => {
    "use strict";
    require("./polyfill");
    module.exports = {
        logObject: {
            "hour": value => ({ hour: value.trim().parseToHour() }),
            "driver": value => {
                const splitedValue = value.split("–");
                return {
                    code: splitedValue[0].trim(),
                    name: splitedValue[1].trim()
                }
            },
            "numLap": value => ({ numLap: Number(value) }),
            "timeLap": value => ({ timeLap: value.trim().parseToHour("mm:ss.SSS") }),
            "mediumLapVelocity": value => ({ mediumLapVelocity: Number(value.replace(",", ".")) })
        }
    };
})();