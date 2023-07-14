import axios from 'axios';

const API_URL = 'https://brasilapi.com.br/api/feriados/v1';
const fetch = () => {
  const instance = axios.create({
    baseURL: API_URL,
  });

  instance.interceptors.request.use(
    (config: any) => {
      return {
        ...config,
        headers: {
          ...config.headers,
          common: {
            ...config.headers.common,
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': '*',
          },
        },
      };
    },
    (error) => Promise.reject(error),
  );

  return instance;
};

export const api = fetch();
