import { methodLuna, validating } from "../js/hendler";

test.each([
  ['2200000000000053', true],
  ['4570662332484145', true],
  ['6763481944301702', false],
])('testing methodLuna', (test, exp) => {
  expect(methodLuna(test)).toBe(exp);
});

test.each([
  ['2200000000000053', 'Mir'],
  ['4570662332484145', 'Visa'],
  ['5312067353551915', 'MasterCard'],
  ['6763481944301702', 'Maestro'],
  ['7353241132238963', false],
])('testing validating', (test, exp) => {
  expect(validating(test)).toBe(exp);
});
