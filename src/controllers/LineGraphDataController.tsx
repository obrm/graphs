import LineGraph from './../components/LineGraph';

import inventoryMockData from '../mocks/inventory.json';
import { parseMaterialsGraphData } from './../services/parseDataService';
import { MATERIALS_ARRAY, COLORS_CHART } from '../constants';

const LineGraphDataController = () => {
  const lineGraphData = parseMaterialsGraphData(inventoryMockData);

  return (
    <LineGraph
      data={lineGraphData}
      colorsChart={COLORS_CHART}
      materialsArray={MATERIALS_ARRAY}
    />
  );
};

export default LineGraphDataController;