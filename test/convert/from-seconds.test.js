const test = require('ava');
const {
  setSeconds,
  setMinutes,
  setHours,
  setDays,
  setYears
} = require('../../src/convert/from-seconds.js');

test('#setSeconds', t => {
  t.is(setSeconds(0), 0);
  t.is(setSeconds(60), 0);
  t.is(setSeconds(2), 2);
  t.is(setSeconds(62), 2);
  t.is(setSeconds(120), 0);
  t.is(setSeconds(3600), 0);
  t.is(setSeconds(3662), 2);
});

test('#setMinutes', t => {
  t.is(setMinutes(0), 0);
  t.is(setMinutes(60), 1);
  t.is(setMinutes(2), 0);
  t.is(setMinutes(62), 1);
  t.is(setMinutes(120), 2);
  t.is(setMinutes(3600), 0);
  t.is(setMinutes(3662), 1);
});

test('#setHours', t => {
  t.is(setHours(0), 0);
  t.is(setHours(60), 0);
  t.is(setHours(2), 0);
  t.is(setHours(62), 0);
  t.is(setHours(120), 0);
  t.is(setHours(3600), 1);
  t.is(setHours(3662), 1);
  t.is(setHours(15731080), 1);
  t.is(setHours(132030240), 3);
  t.is(setHours(205851834), 13);
});

test('#setDays', t => {
  t.is(setDays(0), 0);
  t.is(setDays(60), 0);
  t.is(setDays(2), 0);
  t.is(setDays(62), 0);
  t.is(setDays(120), 0);
  t.is(setDays(3600), 0);
  t.is(setDays(3662), 0);
  t.is(setDays(86400), 1);
  t.is(setDays(86500), 1);
  t.is(setDays(86400 * 2), 2);
  t.is(setDays(15731080), 182);
  t.is(setDays(132030240), 68);
  t.is(setDays(205851834), 192);
  t.is(setDays(253374061), 12);
});

test('#setYears', t => {
  t.is(setYears(15731080), 0);
  t.is(setYears(132030240), 4);
  t.is(setYears(205851834), 6);
  t.is(setYears(253374061), 8);
  t.is(setYears(242062374), 7);
  t.is(setYears(101956166), 3);
  t.is(setYears(33243586), 1);
});
