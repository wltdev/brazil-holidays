import axios from 'axios';

const API_URL = 'https://brasilapi.com.br/api/feriados/v1';
const fetch = () => {
  const api = axios.create({
    baseURL: API_URL,
  });

  api.interceptors.request.use(
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

  return api;
};

export const api = fetch();
