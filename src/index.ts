import { api } from './utils/api';

type NationalProps = number | string;

export const getNationalHolidaysByYear = async (year: NationalProps) => {
  try {
    const { data } = await api.get(`/${year}`);
    return data;
  } catch (error) {
    throw new Error('Something went wrong');
  }
};
