import inventoryData from '../data/inventory.json';

export const COLORS_CHART = [
  { indicator: ['#2566dc', '#00e0be'], line: '#0a7a50' },
  { indicator: ['#9f00f2', '#ff867f'], line: '#941afd' },
  { indicator: ['#941afd', '#9051ff'], line: '#9f00f2' },
  { indicator: ['#0a7a50', '#aafe00'], line: '#aafe00' },
  { indicator: ['#aafe00', '#ffff00'], line: '#affa13' },
  { indicator: ['#0a7a50', '#2566dc'], line: '#00e0be' },
  { indicator: ['#ff867f', '#9f00f2'], line: '#f51f1f' },
  { indicator: ['#9051ff', '#aafe00'], line: '#0a7a50' },
  { indicator: ['#ffff00', '#ff867f'], line: '#ff867f' },
  { indicator: ['#aafe00', '#ffff00'], line: '#9051ff' },
  { indicator: ['#affa13', '#0a7a50'], line: '#2566dc' },
  { indicator: ['#0a7a50', '#941afd'], line: '#ffff00' },
  { indicator: ['#941afd', '#9051ff'], line: '#f51fb5' },
  { indicator: ['#0a7a50', '#aafe00'], line: '#1bff14' },
  { indicator: ['#aafe00', '#ffff00'], line: '#2566dc' },
];

class ViewModel {
  materialsChart: Array<string> = [];

  get mainGraphData() {
    let data: any = [];
    let d: any = inventoryData;

    Object.entries(d).forEach((entry: any) => {
      const timeStampsObj = {};
      const materialsArray: any = Object.entries(entry[1]).map((e: any) => {
        let materialObj: any = {};
        materialObj[e[0]] = e[1];
        return materialObj;
      });
      Object.assign(timeStampsObj, {
        timestamp: entry[0],
        materials: materialsArray,
      });
      data.push(timeStampsObj);
    });

    this.materialsChart = data[0].materials

    return data;
  }  

  formatXAxis = (tickItem: string) => {
    return `${tickItem.slice(5, 7)}/${tickItem.slice(8, 10)}`;
  };

  renderLegend = (props: any) => {
    const { payload } = props;

    return (
      <div className='chart-legend'>
        {payload.map((entry: any, index: number) => (
          <div
            key={`item-${index}`}
            onClick={() => this.onLegendClick(entry.value)}
            style={{
              opacity: this.materialsChart.includes(entry.value) ? 1 : 0.5,
            }}
          >
            <div
              style={{
                backgroundImage: `linear-gradient(to top, ${COLORS_CHART[index].indicator[0]}, ${COLORS_CHART[index].indicator[1]})`,
              }}
            />
            {entry.value}
          </div>
        ))}
      </div>
    );
  };


  onLegendClick = (material: string) => {
    this.materialsChart = [];
    this.materialsChart.push(material);
  };
}

export default ViewModel;
