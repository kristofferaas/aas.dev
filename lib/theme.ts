import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  palette: {
    background: {
      default: "#FDFAEB",
    },
    text: {
      primary: "#3B3F49",
    },
  },
  typography: {
    fontFamily: ["Radio Canada", "sans-serif"].join(","),
  },
});

export default theme;
