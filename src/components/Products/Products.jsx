import { Bar } from 'react-chartjs-2';
import { productsOptions } from '../shared/chart-settings';
import source from '../../source.json';
import { years } from './../shared/data-servises';
import css from './product.module.css';
import ChartDataLabels from 'chartjs-plugin-datalabels';

export const Products = () => {
  const { products } = source;

  const yearsArr = years.map(year =>
    products.filter(product => product.year === year)
  );

  const productsType = ['footwear', 'clothes', 'hats'];
  const colors = [
    'rgba(255, 205, 86, 0.5)',
    'rgba(255, 99, 132, 0.5)',
    'rgba(54, 162, 235, 0.5)',
  ];

  const elements = yearsArr.map(year => {
    console.log(year);
    const months = year.map(({ month }) => month);

    return (
      <li key={year[0].year} className={css.item}>
        <h3 className={css.subTitle}>{year[0].year}</h3>
        <Bar
          plugins={[ChartDataLabels]}
          options={productsOptions}
          data={{
            labels: months,
            datasets: productsType.map((el, i) => {
              return {
                label: el[0].toLocaleUpperCase() + el.slice(1, el.length),
                data: year.map(y => (y[el] * 100).toFixed(0)),
                backgroundColor: colors[i],
                borderWidth: 1,
                borderColor: 'grey',
              };
            }),
          }}
        />
      </li>
    );
  });

  return (
    <div className={`container ${css.productsContainer}`}>
      <h2 className={css.title}>Specific gravity of Products</h2>
      <ul className={css.list}>{elements}</ul>
    </div>
  );
};
