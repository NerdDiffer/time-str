const test = require('ava');
const format = require('../src/format.js');

test('returns "now"', t => {
  const actual = format(0);
  t.is(actual, 'now');
});

test('returns "1 minute and 2 seconds"', t => {
  const actual = format(62);
  t.is(actual, '1 minute and 2 seconds');
});

test('returns "1 hour, 1 minute and 2 seconds"', t => {
  const actual = format(3662);
  t.is(actual, '1 hour, 1 minute and 2 seconds');
});

test('returns "2 minutes"', t => {
  const actual = format(120);
  t.is(actual, '2 minutes');
});

test('returns "1 hour"', t => {
  const actual = format(3600);
  t.is(actual, '1 hour');
});

test('example 1', t => {
  const actual = format(15731080);
  t.is(actual, '182 days, 1 hour, 44 minutes and 40 seconds');
});

test('example 2', t => {
  const actual = format(132030240);
  t.is(actual, '4 years, 68 days, 3 hours and 4 minutes');
});

test('example 3', t => {
  const actual = format(205851834);
  t.is(actual, '6 years, 192 days, 13 hours, 3 minutes and 54 seconds');
});

test('example 4', t => {
  const actual = format(253374061);
  t.is(actual, '8 years, 12 days, 13 hours, 41 minutes and 1 second');
});

test('example 5', t => {
  const actual = format(242062374);
  t.is(actual, '7 years, 246 days, 15 hours, 32 minutes and 54 seconds');
});

test('example 6', t => {
  const actual = format(101956166);
  t.is(actual, '3 years, 85 days, 1 hour, 9 minutes and 26 seconds');
});

test('example 7', t => {
  const actual = format(33243586);
  t.is(actual, '1 year, 19 days, 18 hours, 19 minutes and 46 seconds');
});
