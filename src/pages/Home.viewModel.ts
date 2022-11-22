import inventoryData from '../data/inventory.json';
import ganttData from '../data/gantt.json';
import { COLORS_CHART } from '../services/helperService';
class ViewModel {
  get materialsGraphData() {
    let data: any = [];
    let d: any = inventoryData;

    Object.entries(d).forEach((timeStamp: any) => {
      const obj: any = {};
      Object.assign(obj, { date: timeStamp[0], ...timeStamp[1] });
      data.push(obj);
    });
    return data;
  }

  get manufacturingData() {
    const data: any = ganttData.map((d: any, index: number) => {
      const obj: any = {};
      Object.assign(obj, {
        start: new Date(d.start),
        end: new Date(d.end),
        name: d.recipe,
        id: d.recipe,
        type: d.machine,
        progress: 45,
        isDisabled: true,
        styles: {
          progressColor: `${COLORS_CHART[index]}`,
          progressSelectedColor: `${COLORS_CHART[index + 1]}`,
        },
      });

      return obj;
    });

    return data;
  }
}

export default ViewModel;
