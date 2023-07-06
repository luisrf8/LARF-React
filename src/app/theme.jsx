import { createTheme, ThemeProvider } from '@mui/material/styles';

// Define el tema personalizado
const theme = createTheme({
  typography: {
    fontFamily: 'Unica One',
  },
});

// Exporta el componente ThemeProvider con el tema personalizado
export default function CustomThemeProvider({ children }) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}