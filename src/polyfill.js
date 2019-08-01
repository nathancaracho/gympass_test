(() => {
    "use strict";
    String.prototype.parseToHour = function (pattern = "hh:mm:ss.SSS") {
        const value = this;
        const getValueByPos = (value, patternItem) => value.slice(value.indexOf(patternItem), value.lastIndexOf(patternItem) + 1)
        const setValueOnDate = (date, value, type) => {
            date = Object.assign(date, {});
            if (value)
                date[`set${type}`](value);
            return date;
        };
        let date = new Date();
        if (!value.trim())
            throw "The string can not be empty";
        date = setValueOnDate(date, getValueByPos(this, "h"), "Hours");
        date = setValueOnDate(date, getValueByPos(this, "m"), "Minutes");
        date = setValueOnDate(date, getValueByPos(this, "s"), "Seconds");
        date = setValueOnDate(date, getValueByPos(this, "S"), "Milliseconds");

        return date;
    }
})();