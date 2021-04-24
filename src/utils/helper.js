export const stringLimit = string => {
  const limit = 18;
  if (string.length <= 25) return string;
  return string.substring(0, limit).concat('..');
};

export const kFormatter = num => {
  return Math.abs(num) > 999
    ? `${Math.sign(num) * (Math.abs(num) / 1000).toFixed(1)}k`
    : Math.sign(num) * Math.abs(num);
};
