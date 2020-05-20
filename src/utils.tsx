/**
 * Recursively removes object entries where the value equals to `undefined`
 *
 * @param obj
 * @returns Object with no underfined values
 */
export const removeUndefined = (obj: any) => {
  Object.keys(obj).forEach(key => {
    if (obj[key] && typeof obj[key] === 'object') removeUndefined(obj[key]);
    else if (obj[key] === undefined) delete obj[key];
  });
  return obj;
};

/**
 * Checks if an object is empty
 *
 * @param obj
 * @returns Boolean
 */
export const isEmptyObject = (obj: object) =>
  Object.keys(obj).length === 0 && obj.constructor === Object;
