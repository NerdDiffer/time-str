const test = require('ava');
const { preStringify, stringify } = require('../../src/convert/to-string.js');

test('#stringify: joins 1-element array', t => {
  const actual = stringify(['5 seconds']);
  t.is(actual, '5 seconds');
});

test('#stringify: joins 2-element array', t => {
  const actual = stringify(['4 minutes', '5 seconds']);
  t.is(actual, '4 minutes and 5 seconds');
});

test('#stringify: joins 3-element array', t => {
  const actual = stringify(['3 hours', '4 minutes', '5 seconds']);
  t.is(actual, '3 hours, 4 minutes and 5 seconds');
});

test('#stringify: joins 4-element array', t => {
  const actual = stringify(['2 days', '3 hours', '4 minutes', '5 seconds']);
  t.is(actual, '2 days, 3 hours, 4 minutes and 5 seconds');
});

test('#stringify: joins 5-element array', t => {
  const actual = stringify(['1 year', '2 days', '3 hours', '4 minutes', '5 seconds']);
  t.is(actual, '1 year, 2 days, 3 hours, 4 minutes and 5 seconds');
});
