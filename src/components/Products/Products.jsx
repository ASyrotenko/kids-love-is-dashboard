import ChartDataLabels from 'chartjs-plugin-datalabels';

import { Bar } from 'react-chartjs-2';
import { productsOptions, productsData } from '../shared/chart-settings';
import { salesByYear } from './../shared/data-servises';

import css from './product.module.css';

export const Products = () => {
  const elements = salesByYear.map(year => {
    return (
      <li key={year[0].year} className={css.item}>
        <h3 className={css.subTitle}>{year[0].year}</h3>
        <Bar
          plugins={[ChartDataLabels]}
          options={productsOptions}
          data={productsData(year)}
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
