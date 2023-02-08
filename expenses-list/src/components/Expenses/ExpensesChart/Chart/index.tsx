import { DataPoints } from "../../../interfaces";
import { ChartBar } from "./ChartBar";

import "./styles.css";

interface ChartProps {
  dataPoints: Array<DataPoints>;
}

export const Chart = (props: ChartProps) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};
