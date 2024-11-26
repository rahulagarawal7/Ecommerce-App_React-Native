export const mask = (cc: number, num = 4, mask = '*') =>
  `${cc}`.slice(-num).padStart(`${cc}`?.length, mask);
