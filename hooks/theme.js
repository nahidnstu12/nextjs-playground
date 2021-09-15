import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#59b210",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: "#e53e3e",
    },
    background: {
      default: "#fff",
    },
  },
});

export default theme;
