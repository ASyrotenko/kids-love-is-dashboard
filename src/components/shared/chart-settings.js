import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { months, years, sum, productsType } from './../shared/data-servises';
import { dashboardColors, productsColors } from '../shared/colors';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Dashboard

export const dashboardOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: false,
      text: 'Kids Love Is ♥',
    },
  },
};

export const dashboardData = {
  labels: months,
  datasets: years.map((year, i) => {
    return {
      label: year,
      data: sum(year),
      backgroundColor: dashboardColors[i],
    };
  }),
};

// Products

export const productsOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: false,
      text: 'Kids Love Is ♥',
    },
    datalabels: {
      color: '#000',
    },
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

export const productsData = year => {
  const months = year.map(({ month }) => month);
  return {
    labels: months,
    datasets: productsType.map((el, i) => {
      return {
        label: el[0].toLocaleUpperCase() + el.slice(1, el.length),
        data: year.map(y => (y[el] * 100).toFixed(0)),
        backgroundColor: productsColors[i],
        borderWidth: 1,
        borderColor: 'grey',
      };
    }),
  };
};
