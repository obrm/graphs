import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AppBar } from './components';
import { Home } from './pages'

import theme from './theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar />
      <Home />
    </ThemeProvider>
  );
}

export default App;