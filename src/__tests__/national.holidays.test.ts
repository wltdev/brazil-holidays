import { Holiday } from './../interfaces/holiday';
import { getNationalHolidaysByYear } from '../index';

test('Get National Holidays', async () => {
  const holidays: Array<Holiday> = await getNationalHolidaysByYear(2023);

  expect(holidays[0]).toHaveProperty('name');
});
