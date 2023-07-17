import axios from 'axios';
import { API_URL } from './utils/api';
import fetchBrasilAPIService from './services/brazilapi.service';
import { Holiday } from './interfaces/holiday';

type NationalProps = number | string;

export const getNationalHolidaysByYear = async (year: NationalProps): Promise<Holiday[]> => {
  try {
    const url = `${API_URL}/${year}`;
    const data: Holiday[] = await fetchBrasilAPIService(url);
    return data;
  } catch (error) {
    throw error;
  }
};
