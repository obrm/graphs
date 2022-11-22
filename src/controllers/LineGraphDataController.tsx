import LineGraph from './../components/LineGraph';

import inventoryMockData from '../mocks/inventory.json';

import { parseMaterialsGraphData } from './../services/parseDataService';

import { materialsArray, colorsChart } from '../constants';

const LineGraphDataController = () => {
  const lineGraphData = parseMaterialsGraphData(inventoryMockData);

  return (
    <LineGraph
      data={lineGraphData}
      colorsChart={colorsChart}
      materialsArray={materialsArray}
    />
  );
};

export default LineGraphDataController;