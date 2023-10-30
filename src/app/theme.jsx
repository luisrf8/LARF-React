import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function CustomThemeProvider({ children }) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
}