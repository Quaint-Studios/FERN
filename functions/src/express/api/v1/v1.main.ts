export const root = '/api/v1';

// Routes -- Used to make sure endpoints never go bad because of a typo or a forgotten change.

export const template: IEndpoint = {
  endpoint: '/template'
};

export const user: IEndpoint = {
  endpoint: '/user'
};

interface IEndpoint {
  endpoint: string;
}
