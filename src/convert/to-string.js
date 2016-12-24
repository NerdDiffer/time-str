const preStringify = durationObj => {
  const durationArr = [];

  const { seconds, minutes, hours, days, years } = durationObj;

  populate(durationArr, years, 'year');
  populate(durationArr, days, 'day');
  populate(durationArr, hours, 'hour');
  populate(durationArr, minutes, 'minute');
  populate(durationArr, seconds, 'second');

  return durationArr;

  function populate (arr, value, singularUnit) {
    if (value > 1) {
      arr.push(`${value} ${singularUnit}s`);
    } else if (value === 1) {
      arr.push(`${value} ${singularUnit}`);
    }
  }
};

const stringify = durationArr => {
  const len = durationArr.length;

  if (len === 0) { throw Error('array must have some values'); }
  if (len === 1) { return durationArr[0]; }

  const and = ' and ';

  if (len === 2) { return durationArr.join(and); }

  const comma = ', ';
  let joined = '';

  for (let i = 0; i < len - 2; i += 1) {
    const component = durationArr[i];
    joined += (component + comma);
  }

  return joined += (durationArr[len - 2] + and + durationArr[len - 1]);
};

module.exports = { preStringify, stringify };
