// import fetch from 'node-fetch';
const fetch = require('node-fetch');
import ServiceError from '../errors/ServiceError';
import { Holiday } from '../interfaces/holiday';

export default function fetchBrasilAPIService(url: string): Promise<any> {
  const options = {
    method: 'GET',
    mode: 'cors',
    headers: {
      'content-type': 'application/json;charset=utf-8',
    },
    timeout: 30000,
  };

  return fetch(url, options).then(parseResponse).then(extractHolidaysValuesFromResponse).catch(throwApplicationError);
}

function parseResponse(response) {
  if (response.ok === false || response.status !== 200) {
    throw new Error('Ano não encontrado na base do BrasilAPI.');
  }

  return response.json();
}

function extractHolidaysValuesFromResponse(response: Holiday[]) {
  return {
    ...response,
    service: 'brasilapi',
  };
}

function throwApplicationError(error) {
  const serviceError = new ServiceError({
    message: error.message,
    service: 'brasilapi',
  });

  if (error.name === 'FetchError') {
    serviceError.message = 'Erro ao se conectar com o serviço BrasilAPI.';
  }

  throw serviceError;
}
