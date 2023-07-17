class ServiceError extends Error {
  [x: string]: any;
  constructor({ message, service }: any = {}) {
    super();

    this.name = 'ServiceError';
    this.message = message;
    this.service = service;
  }
}

export default ServiceError;
