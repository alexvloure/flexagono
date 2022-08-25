import './App.css';
import { Box, createTheme, ThemeProvider } from '@mui/material';
import MainComponent from './views';
import { getDesignTokens } from './theme';
import { createContext, useState } from 'react';
import CssBaseline from "@mui/material/CssBaseline";
import './styles.css';

export const ThemeContext = createContext();

export default function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    mode === 'light' ? setMode('dark') : setMode('light');
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      <ThemeProvider theme={createTheme(getDesignTokens(mode))}>
        <CssBaseline />
        <Box>
          <MainComponent />
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
