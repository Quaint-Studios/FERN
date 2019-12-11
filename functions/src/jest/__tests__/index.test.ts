import * as index from '../../index';

describe('Functions entrypoint', () => {
  test('Web API exists', () => {
    expect(index).toHaveProperty('webApi');
  });
});
