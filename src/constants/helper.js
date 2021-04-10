export const stringLimit = string => {
  let limit = 18;
  if (string.length <= 25) {
    return string;
  }
  return string.substring(0, limit).concat('..');
};
