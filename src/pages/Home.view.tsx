import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent
} from '@mui/material';

import ViewModel from './Home.viewModel';
import { COLORS_CHART, MATERIALS_ARRAY } from '../services/helperService';
import { useViewModel } from './../hooks';
import { LineGraph, GanttTable } from '../components';

import './styles/styles.scss';

export type Props = {

};

const Home: React.FC<Props> = (props: Props) => {
  const viewModel: ViewModel = useViewModel(ViewModel, props);

  return (
    <Container maxWidth="lg" sx={{ marginTop: '60px' }}>
      <Grid container spacing={3} mb={10} alignItems="stretch">
        <Grid item xs={12}>
          <Card sx={{
            height: '100%',
            position: 'relative',
          }}>
            <CardContent>
              <Typography variant="h4">
                Inventory (line) graph
              </Typography>
              <div className='content chart'>
                <LineGraph
                  data={viewModel.materialsGraphData}
                  colorsChart={COLORS_CHART}
                  materialsArray={MATERIALS_ARRAY}
                />
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card sx={{
            height: '50vh',
            position: 'relative',
          }}>
            <CardContent>
              <Typography variant="h4">
                Manufacturing Gantt graph
              </Typography>
              <div className='content chart'>
                <GanttTable data={viewModel.manufacturingData} />
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;