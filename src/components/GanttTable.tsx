import { Chart } from "react-google-charts";

const options = {
  height: 190,
  gantt: {
    trackHeight: 30,
    criticalPathEnabled: false,
    innerGridHorizLine: {
      stroke: '#535366',
      strokeWidth: 2
    },
    innerGridTrack: { fill: '#231D3B' },
    innerGridDarkTrack: { fill: '#312B49' }
  },
};

interface Props {
  data: any[];
}

const GanttTable: React.FC<Props> = ({ data }) => {

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
