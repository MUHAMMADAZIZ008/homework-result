import { createTheme } from "@mui/material/styles";

export const customTheme = createTheme({
  palette: {
    primary: {
      main: "#618c78",
    },
  },
  typography: {
    fontFamily: 'Ubuntu, serif',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "@global": {
          "@font-face": {
            fontFamily: "Ubuntu",
            src: `url(https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap)`,
          },
        },
      },
    },
  },
});
