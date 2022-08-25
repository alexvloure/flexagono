import { common } from "@mui/material/colors";
import shadows from "./shadows";

export const getDesignTokens = (mode) => ({
  palette: {
        mode,
        background: {
          ...(mode === 'light' ?
          {
            default: common.white,
            paper: common.white,
          } 
          : {
            default: '#1D1C16',
            paper: '#1D1C16',
          })
          
        },
        primary: {
          light: 'rgb(115, 175, 228)',
          main: '#509BDE',
          dark: 'rgb(56, 108, 155)',
          contrast: '#FFFFFF',
        },
        secondary: {
          light: 'rgb(60, 84, 106)',
          main: '#0C2A45',
          dark: 'rgb(8, 29, 48)',
          contrast: '#FFFFFF',
        },
        error: {
          light: '#f44336',
          main: '#B90E0A',
          dark: '#d32f2f',
          contrast: '#FFFFFF',
        },
        warning: {
          light: '#ffb74d',
          main: '#ff9800',
          dark: '#f57c00',
          contrast: 'rgba(0, 0, 0, 0.87)',
        },
        info: {
          light: '#64b5f6',
          main: '#2196f3',
          dark: '#1976d2',
          contrast: '#FFFFFF',
        },
        success: {
          light: '#81c784',
          main: '#4caf50',
          dark: '#388e3c',
          contrast: '#FFFFFF',
        },
        text: {
          ...(mode === 'light'
           ? {
            primary: '#1D1C16',
            secondary: '#4A473A',
            disabled: '#1D1C1680',
           }
           : {
              primary: '#E7E2D9',
              secondary: '#CCC6B4',
              disabled: '#E7E2D980',
           })
        }
      },
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              borderRadius: '0px',
            },
          }
        }
      },
      shadows,
      typography: {
        fontFamily: 'Montserrat, Poppins, Roboto, sans-serif',
      },
      breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 900,
          lg: 1200,
          xl: 1536,
        },
      },
});