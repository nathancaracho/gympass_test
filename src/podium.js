(() => {
  'use strict';
  require('./polyfill');
  const separeteByDriver = lapList => {
    let lapListSeparated = {};
    lapList.forEach((lap) => {
      if (lapListSeparated[lap.code]) lapListSeparated[lap.code].push(lap);
      else lapListSeparated[lap.code] = [lap];
    });
    return lapListSeparated;
  };
  const orderByNumLap = lapList => {
    let lapOrdered = [];
    const codeList = Object.getOwnPropertyNames(lapList);
    codeList.forEach(code => lapOrdered.push(lapList[code].orderBy('numLap').last()));
    return lapOrdered;
  };
  const podium = (lapList) => {
    const lapListByDriver = separeteByDriver(lapList);
    const firstDriver = orderByNumLap(lapListByDriver).orderBy('hourParsed').first();
    let podiumPositions = [firstDriver];
    const codeList = Object.getOwnPropertyNames(lapListByDriver.removeProperty(firstDriver.code));
    codeList.forEach(code => {
      let lastLap = lapListByDriver[code].filter(lap => lap.hourParsed > firstDriver.hourParsed).orderBy('hourParsed').last();
      if (!lastLap) lastLap = lapListByDriver[code].orderBy('hourParsed').last();
      podiumPositions.push(lastLap);
    });
    return podiumPositions.orderBy('numLap', 'desc');
  };
  module.exports = podium;
})();
