import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent
} from '@mui/material';


import { LineGraphDataController, GanttGraphDataController } from '../controllers';

import './styles/styles.scss';

const Home = () => {
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
                <LineGraphDataController />
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
                <GanttGraphDataController />
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
