import "./styles.css";

interface ChartBarProps {
  value: number;
  maxValue: number;
  label: string;
}

export const ChartBar = (props: ChartBarProps) => {
  let barFillHeight = "0%";

  if (props.value > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100).toString();
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight, backgroundColor: "red" }}
        ></div>
      </div>
      <div className="chart-bar__label"></div>
    </div>
  );
};
