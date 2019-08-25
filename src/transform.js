(() => {
  'use strict';
  require('./polyfill');
  const addZeroBefore = (str, length) => {
    let value = str;
    if (str.length < length) {
      let zero = '';
      for (let i = 0, len = length - str.length; i < len; i++) zero += '0';
      value = `${zero}${str}`;
    }
    return value;
  };
  module.exports = {
    logObject: {
      'hour': value => ({ hour: value, hourParsed: addZeroBefore(value.trim(), 12).parseToHour() }),
      'driver': value => {
        const splitedValue = value.split('–');
        return {
          code: splitedValue[0].trim(),
          name: splitedValue[1].trim()
        };
      },
      'numLap': value => ({ numLap: Number(value) }),
      'timeLap': value => ({ timeLap: addZeroBefore(value.trim(), 9).parseToHour('mm:ss.SSS') }),
      'mediumLapVelocity': value => ({ mediumLapVelocity: Number(value.replace(',', '.')) })
    }
  };
})();
