import * as utils from './utils';


const array = [{name: 'kayode', sex: 'male'}];
const text = 'kayode';

test('Convert to percentage', () => {
  expect(utils.toPercent(6, 10)).toBe(60);
});

test('validate array of object', () => {
  expect(utils.validateField(array, () => {}, () => {})).toBe(true);
});

test('should trim text', () => {
  const res = 'kay...';
  expect(utils.trimText(text, 2, '...')).toBe(res);
});

