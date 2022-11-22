import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface Props {
  data: any;
  colorsChart: any;
  materialsArray: any;
}


const LineGraph: React.FC<Props> = ({ data, colorsChart, materialsArray }: Props) => {

  return (
    <ResponsiveContainer width='100%' height='55vh' aspect={3} >
      <LineChart
        width={500}
        height={1000}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        {materialsArray.map((material: any, index: number) => {
          return <Line key={colorsChart[index]} type="monotone" dataKey={material} stroke={colorsChart[index]} />;
        })}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineGraph;