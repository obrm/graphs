import ganttMockData from '../mocks/gantt.json';
import { parseManufacturingData } from '../services/parseDataService';
import GanttTable from '../components/GanttTable';

const GanttGraphDataController = () => {
  const ganttData = parseManufacturingData(ganttMockData);

  return <GanttTable data={ganttData} />;
};

export default GanttGraphDataController;
