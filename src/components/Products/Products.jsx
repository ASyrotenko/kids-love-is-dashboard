import { Bar } from 'react-chartjs-2';
import { productsOptions } from '../shared/chart-settings';
import source from '../../source.json';
import { months, years, sum } from './../shared/data-servises';
import css from './product.module.css';

export const Products = () => {
  const { products } = source;

  const yearsArr = years.map(year =>
    products.filter(product => product.year === year)
  );

  const productsType = ['clothes', 'footwear', 'hats'];
  const colors = ['#deeb0a', '#6a6c45', '#9c99db'];

  const elements = yearsArr.map(year => {
    console.log(year);
    const months = year.map(({ month }) => month);
    const datas = productsType.map(el => year.map(y => y[el]));
    console.log(datas);

    return (
      <li key={year[0].year} className={css.item}>
        <h2 className={css.title}>{year[0].year}</h2>
        <Bar
          options={productsOptions}
          data={{
            labels: months,
            datasets: productsType.map((el, i) => {
              return {
                label: el[0].toLocaleUpperCase() + el.slice(1, el.length),
                data: year.map(y => y[el]),
                backgroundColor: colors[i],
              };
            }),
          }}
        />
      </li>
    );
  });

  return (
    <div className={`container ${css.productsContainer}`}>
      <ul className={css.list}>{elements}</ul>
    </div>
  );
};
