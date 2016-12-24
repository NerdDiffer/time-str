const {
  setSeconds,
  setMinutes,
  setHours,
  setDays,
  setYears
} = require('./convert/from-seconds.js');
const { preStringify, stringify } = require('./convert/to-string.js');

const format = n => {
  if (n === 0) { return 'now'; }

  const duration = {
    seconds: setSeconds(n),
    minutes: setMinutes(n),
    hours: setHours(n),
    days: setDays(n),
    years: setYears(n)
  };

  const durationArr = preStringify(duration);
  return stringify(durationArr);
};

module.exports = format;
