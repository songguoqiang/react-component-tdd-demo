import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

export const mockAxios = new MockAdapter(axios);

export function expectPropTypeCheckToFail(renderFunction) {
  expect(renderFunction).toThrowError(/Failed prop type/);
}