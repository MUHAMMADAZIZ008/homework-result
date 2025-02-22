import { createTheme } from "@mui/material";
import { COLORS } from "./colors";

export const theme = createTheme({
    palette: {
        primary: {
            main: COLORS.primary,
        },
        error: {
            main: COLORS.danger,
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 320,
            md: 768,
            lg: 992,
            xl: 1323,
        },
    },
    typography: {
        fontFamily: ["Ubuntu", "serif"].join(','),
        h2: {
            fontWeight: 700,
            fontSize: '40px',
            lineHeight: '130%',
            color: COLORS.titleColor,
        }
    }
})