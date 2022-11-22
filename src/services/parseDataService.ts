import { ILineGraphData, IGanttData } from './../types/interfaces';

import { ganttColumns } from './../constants/index';

export const parseMaterialsGraphData = (inventoryData: any) => {
  let data: ILineGraphData[] = [];
  let d: any = inventoryData;

  Object.entries(d).forEach((timeStamp: any) => {
    const obj: any = {};
    Object.assign(obj, { date: timeStamp[0], ...timeStamp[1] });
    data.push(obj);
  });

  return data;
};

export const parseManufacturingData = (ganttData: IGanttData[]) => {
  const rows = ganttData.map((d: any) => {
    return [
      d.machine,
      d.machine,
      d.recipe,
      new Date(d.start),
      new Date(d.end),
      new Date(d.end).getTime() - new Date(d.start).getTime(),
      0,
      null,
    ];
  });

  return [ganttColumns, ...rows];
};
