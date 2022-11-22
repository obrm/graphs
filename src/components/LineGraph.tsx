import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
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
  console.log("❤️", materialsArray);
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={500}
        height={400}
        data={materialsArray}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <defs>
          {colorsChart.map(
            (color: any, index: number) => (
              <linearGradient
                key={index}
                id={`gradient${index}`}
                x1="0"
                y1="100%"
                x2="0"
                y2="0%">
                <stop
                  offset="0%"
                  stopColor={color.indicator[0]}
                  stopOpacity={0}
                />
                <stop
                  offset="100%"
                  stopColor={color.indicator[1]}
                  stopOpacity={1}
                />
              </linearGradient>
            )
          )}
        </defs>
        <CartesianGrid vertical={false} opacity={0.1} />
        <XAxis
          dataKey="timestamp"
          tickFormatter={formatXAxis}
          label={{ value: "Date", position: "bottom" }}
        />
        <YAxis
          width={35}
          label={
            width > 600
              ? {
                value: "Score",
                position: "top",
                offset: 20,
                className: "yaxis-label",
              }
              : undefined
          }
          domain={[
            (dataMin: number) => Math.max(0, dataMin - 5),
            (dataMax: number) => Math.min(100, dataMax + 5),
          ]}
        />
        <Tooltip
          content={<CustomTooltip />}
          cursor={{
            strokeDasharray: 5,
            strokeWidth: 1,
          }}
        />
        <Legend
          layout="horizontal"
          verticalAlign="top"
          content={renderLegend}
        />
        {materialsArray.map(
          (material: string, index: number) => (
            <Area
              key={index}
              connectNulls={true}
              type="monotone"
              dataKey={material}
              stroke={colorsChart[index].line}
              fill={`url(#gradient${index})`}
              opacity={0.5}
              activeDot={{ stroke: "transparent" }}
            />
          )
        )}
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default LineGraph;