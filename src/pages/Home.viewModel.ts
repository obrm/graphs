import inventoryData from '../data/inventory.json';

export const COLORS_CHART = [
  '#0a7a50',
  '#941afd',
  '#9f00f2',
  '#0019fe',
  '#affa13',
  '#00e0be',
  '#f51f1f',
  '#0a7a50',
  '#ff867f',
  '#9051ff',
  '#dc25dc',
  '#ffff00',
  '#f51fb5',
  '#1bff14',
  '#2566dc',
];

export const MATERIALS_ARRAY = [
  "mate-2050",
  "mate-5629",
  "mate-8482",
  "mate-9472",
  "mate-3809",
  "mate-5099",
  "mate-7221",
  "mate-3563",
  "mate-9452",
  "mate-7839",
  "mate-7320",
  "mate-1617",
  "mate-5601",
  "mate-5896",
  "mate-4652",
];

class ViewModel {

  get mainGraphData() {
    let data: any = [];
    let d: any = inventoryData;

    Object.entries(d).forEach((timeStamp: any) => {
      const obj: any = {};
      Object.assign(obj, { date: timeStamp[0], ...timeStamp[1] });
      data.push(obj);
    });
    return data;
  }

}

export default ViewModel;
