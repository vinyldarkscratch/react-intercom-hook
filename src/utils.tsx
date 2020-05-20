/**
 * Checks if an object is empty
 *
 * @param obj
 * @returns Boolean
 */
export const isEmptyObject = (obj: object) =>
  Object.keys(obj).length === 0 && obj.constructor === Object;
