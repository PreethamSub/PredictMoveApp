import React from "react";
import { Chart, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { Doughnut } from "react-chartjs-2";

Chart.register(ArcElement, Tooltip, Legend, Title);
Chart.defaults.plugins.tooltip.backgroundColor = 'rgb(0, 0, 156)';
Chart.defaults.plugins.legend.position = 'right';
Chart.defaults.plugins.legend.title.display = true;
Chart.defaults.plugins.legend.title.text = '60 of 100 Done';
Chart.defaults.plugins.legend.title.font = 'Helvetica Neue';

export default function GetChart({ data }) {
  return (
    <div>
      <Doughnut
        data={data}
        height="150px"
        width="150px"
        options={{ maintainAspectRatio: false }}
      />
    </div>
  );
}
