(() => {
    "use strict";
    const separeteByDriver = lapList => {
        let lapListSeparated = {};
        lapList.forEach((lap) => {
            const code = lap.driver.split("–")[0].trim();
            if (lapListSeparated[code])
                lapListSeparated[code].push(lap);
            else
                lapListSeparated[code] = [lap];
        });
        return lapListSeparated;
    };
    const podium = (lapList) => {
        const lapListSeparated = separeteByDriver(lapList);
        console.log(lapListSeparated);
    };
    module.exports = podium;
})();