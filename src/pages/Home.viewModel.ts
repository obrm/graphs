import inventoryData from '../data/inventory.json';
import ganttData from '../data/gantt.json';

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
    const columns = [
      { type: 'string', label: 'Machine ID' },
      { type: 'string', label: 'Machine Name' },
      { type: 'string', label: 'Recipe' },
      { type: 'date', label: 'Start Date' },
      { type: 'date', label: 'End Date' },
      { type: 'number', label: 'Duration' },
      { type: 'number', label: 'Percent Complete' },
      { type: 'string', label: 'Dependencies' },
    ];

    const rows = ganttData.map((d: any) => {
      return [
        d.machine,
        d.machine,
        d.recipe,
        new Date(d.start),
        new Date(d.end),
        null,
        0,
        null,
      ];
    });

    return [columns, ...rows];
  }
}

export default ViewModel;
