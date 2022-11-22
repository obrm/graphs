import inventoryData from '../data/inventory.json';

export const COLORS_CHART = [
  '#0a7a50',
  '#941afd',
  '#9f00f2',
  '#aafe00',
  '#affa13',
  '#00e0be',
  '#f51f1f',
  '#0a7a50',
  '#ff867f',
  '#9051ff',
  '#2566dc',
  '#ffff00',
  '#f51fb5',
  '#1bff14',
  '#2566dc',
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

    this.materialsChart = data[0].materials;

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
                backgroundImage: `linear-gradient(to top, ${COLORS_CHART[index]}, ${COLORS_CHART[index]})`,
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
