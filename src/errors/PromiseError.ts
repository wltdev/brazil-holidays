class PromiseError extends Error {
  [x: string]: any;
  constructor({ message, type, errors }: any = {}) {
    super();

    this.name = 'PromiseError';
    this.message = message;
    this.type = type;
    this.errors = errors;
  }
}

export default PromiseError;
