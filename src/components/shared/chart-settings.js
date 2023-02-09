import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { months, years, sum } from './../shared/data-servises';
import { colors } from '../shared/colors';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

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
      backgroundColor: colors[i],
    };
  }),
};

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
