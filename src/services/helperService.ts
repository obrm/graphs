import { Task } from 'gantt-task-react/dist/types/public-types';

import ganttData from '../data/gantt.json';

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
  'mate-2050',
  'mate-5629',
  'mate-8482',
  'mate-9472',
  'mate-3809',
  'mate-5099',
  'mate-7221',
  'mate-3563',
  'mate-9452',
  'mate-7839',
  'mate-7320',
  'mate-1617',
  'mate-5601',
  'mate-5896',
  'mate-4652',
];

export function initData() {
  const data: Task[] = ganttData.map((d: any, index: number) => {
    const obj: any = {};
    Object.assign(obj, {
      start: new Date(d.start),
      end: new Date(d.end),
      name: d.machine,
      id: d.recipe,
      type: d.recipe,
      isDisabled: false,
      styles: {
        progressColor: `${COLORS_CHART[index]}`,
        progressSelectedColor: `${COLORS_CHART[index + 1]}`,
      },
      project: d.recipe,
      displayOrder: index + 1,
    });

    return obj;
  });

  return data;
}

export function getStartEndDateForMachine(machine: Task[], machineId: string) {
  const projects = machine.filter((t) => t.project === machineId);
  let start = projects[0].start;
  let end = projects[0].end;

  for (let i = 0; i < projects.length; i++) {
    const machine = projects[i];
    if (start.getTime() > machine.start.getTime()) {
      start = machine.start;
    }
    if (end.getTime() < machine.end.getTime()) {
      end = machine.end;
    }
  }
  return [start, end];
}