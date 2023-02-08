import { Bar } from "react-chartjs-2";
import { options, dataBar } from "../shared/chart-settings";

import css from "./dashboard.module.css";

export function Dashboard() {
  return (
    <div className="container">
      <h1 className={css.title}>Kids Love Is ❤</h1>
      <hr />
      <Bar options={options} data={dataBar} />
    </div>
  );
}
