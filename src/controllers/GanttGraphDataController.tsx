import GanttTable from '../components/GanttTable';

import { parseManufacturingData } from '../services/parseDataService';

import ganttMockData from '../mocks/gantt.json';


const GanttGraphDataController = () => {
  const ganttData = parseManufacturingData(ganttMockData);

  return <GanttTable data={ganttData} />;
};

export default GanttGraphDataController;
