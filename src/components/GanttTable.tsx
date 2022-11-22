import { Chart } from "react-google-charts";

interface Props {
  data: any;
}

const GanttTable: React.FC<Props> = ({ data }) => {
  const options = {
    height: 400,
    gantt: {
      trackHeight: 30,
    },
  };

  return (
    <Chart
      chartType="Gantt"
      width="100%"
      height="20vh"
      data={data}
      options={options}
    />
  );
};

export default GanttTable;
