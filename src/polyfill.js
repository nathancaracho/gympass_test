(() => {
  'use strict';
  Array.prototype.orderBy = function (prop, type = 'asc') {
    let sortedList = [];
    if (typeof type !== 'string') throw new Error('The type should by a string');
    type = type.toLocaleLowerCase();
    if (type !== 'asc' && type !== 'desc') throw new Error(`The type ${type} not exists, use asc or desc`);
    if (prop && typeof prop === 'string') {
      if (type === 'asc') sortedList = this.sort((a, b) => (a[prop] > b[prop] ? 1 : -1));
      else if (type === 'desc') sortedList = this.sort((a, b) => (a[prop] < b[prop] ? 1 : -1));
    } else {
      if (type === 'asc') sortedList = this.sort((a, b) => (a > b ? 1 : -1));
      else if (type === 'desc') sortedList = this.sort((a, b) => (a > b ? 1 : -1));
    }
    return sortedList;
  };
  Array.prototype.last = function () {
    return this[this.length - 1];
  };
  Array.prototype.first = function () {
    return this[0];
  };
  Array.prototype.sum = function (property) {
    let sumValue = 0;
    if (typeof property === 'string') sumValue = this.reduce((current, next) => current[property] += next[property]);
    else sumValue = this.reduce((current, next) => current += next);
    return sumValue;
  };
  Object.prototype.removeProperty = function (prop) {
    const obj = Object.assign({}, this);
    delete obj[prop];
    return obj;
  };
  String.prototype.parseToHour = function (pattern = 'hh:mm:ss.SSS') {
    const value = this;
    let keyObj = {
      'h': '',
      'm': '',
      's': '',
      'S': ''
    };
    if (!value.trim()) throw 'The string can not be empty';
    if (value.length != pattern.length) throw 'The value no correspond with pattern';
    for (let i = 0, length = pattern.length; i < length; i++) {
      const char = pattern[i];
      if (keyObj[char] != null) keyObj[char] += value[i];
    }
    return Number(keyObj['h']) + Number(keyObj['m'] / 60) + Number(keyObj['s'] / 3600) + Number(keyObj['S'] / 3.6e+6);
  };
})();
