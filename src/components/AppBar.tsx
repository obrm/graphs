import { AppBar, Typography, Toolbar, Box } from '@mui/material';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" sx={{ minHeight: '100px' }}>
        <Toolbar>
          <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
            Graphs View
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}