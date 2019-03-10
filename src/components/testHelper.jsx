export function expectPropTypeCheckToFail(renderFunction) {
  expect(renderFunction).toThrowError(/Failed prop type/);
}