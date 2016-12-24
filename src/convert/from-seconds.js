/* Convert seconds to another unit */

// time relationships
const SECONDS_IN_MINUTE = 60;
const MINUTES_IN_HOUR = 60;
const HOURS_IN_DAY = 24;
const DAYS_IN_YEAR = 365;
const MINUTES_IN_DAY = MINUTES_IN_HOUR * HOURS_IN_DAY;
const SECONDS_IN_DAY = SECONDS_IN_MINUTE * MINUTES_IN_HOUR * HOURS_IN_DAY;
const SECONDS_IN_YEAR = SECONDS_IN_DAY * DAYS_IN_YEAR;

const setSeconds = numSeconds => numSeconds % SECONDS_IN_MINUTE;

const setMinutes = numSeconds => {
  const reducedToSeconds = Math.floor(numSeconds / SECONDS_IN_MINUTE);
  return reducedToSeconds % SECONDS_IN_MINUTE;
};

const setHours = numSeconds => {
  if (numSeconds < SECONDS_IN_DAY) {
    const reducedToMinutes = Math.floor(numSeconds / MINUTES_IN_HOUR);
    return Math.floor(reducedToMinutes / SECONDS_IN_MINUTE) % SECONDS_IN_MINUTE;
  } else {
    return setHours(numSeconds - SECONDS_IN_DAY);
  }
};

const setDays = numSeconds => {
  if (numSeconds < SECONDS_IN_YEAR) {
    return Math.floor(numSeconds / SECONDS_IN_DAY) % MINUTES_IN_DAY;
  } else {
    return setDays(numSeconds - SECONDS_IN_YEAR);
  }
};

const setYears = numSeconds => {
  const reducedToDays = Math.floor(numSeconds / DAYS_IN_YEAR);
  const reducedToHours = Math.floor(reducedToDays / HOURS_IN_DAY);
  const reducedToMinutes = Math.floor(reducedToHours / MINUTES_IN_HOUR);
  const reducedToSeconds = Math.floor(reducedToMinutes / SECONDS_IN_MINUTE);
  return reducedToSeconds % SECONDS_IN_MINUTE;
};

module.exports = { setSeconds, setMinutes, setHours, setDays, setYears };
