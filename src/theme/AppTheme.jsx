import { createTheme, ThemeProvider } from "@mui/material/styles";
import purpleTheme from './purpleTheme'
import { CssBaseline } from "@mui/material";

export default function AppTheme({ children }) {
  return (
    <ThemeProvider
      theme={purpleTheme}
    >
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
