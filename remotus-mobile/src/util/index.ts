export const ObjectEmptyCheck = (value: any) =>
  Object.keys(value).length === 0 && value.constructor === Object;
