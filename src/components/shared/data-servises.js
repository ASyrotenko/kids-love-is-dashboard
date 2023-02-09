import source from '../../source.json';

const { sales, products } = source;

export const months = sales
  .map(({ month }) => month)
  .filter((el, i, arr) => arr.indexOf(el) === i);

export const years = sales
  .map(({ year }) => year)
  .filter((el, i, arr) => arr.indexOf(el) === i);

export const sum = year =>
  sales.filter(el => el.year === year).map(el => el.sum.toFixed(0));
