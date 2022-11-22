import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { CustomTooltip } from './';
import { useWindowDimensions } from '../hooks';

interface Props {
  data: any;
  colorsChart: any;
  formatXAxis: any;
  renderLegend: any;
  materialsArray: any;
}


const LineGraph: React.FC<Props> = ({ data, colorsChart, formatXAxis, renderLegend, materialsArray }: Props) => {
  const { width } = useWindowDimensions();

  return (
    <ResponsiveContainer width={width} aspect={3} >
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        {materialsArray.map((material: any, index: number) => {
          return <Line key={colorsChart[index]} type="monotone" dataKey={material} stroke={colorsChart[index]} activeDot={{ r: 8 }} />;
        })}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineGraph;