import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1E61EB',
            dark: '#114CC5'
        },
        secondary: {
            main: '#9d9d9d',
            dark: '#000'
        },
        success: {
            main: '#38C172'
        },
        error: {
            main: '#ED2D39'
        }
    },
    typography: {
        fontFamily: '"Roboto", \'sans-serif\'',
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
        h1: {
            fontSize: 48,
            lineHeight: '68px',
            fontWeight: 700
        },
        h2: {
            fontSize: 40,
            lineHeight: '56px',
            fontWeight: 600
        },
        h3: {
            fontSize: 30,
            lineHeight: '56px',
            fontWeight: 600
        },
        h4: {
            fontSize: 24,
            lineHeight: '36px',
            fontWeight: 600
        },
        subtitle1: {
            fontSize: 18,
            lineHeight: '34px',
            fontWeight: 600
        },
        body1: {
            fontSize: 16,
            lineHeight: '26px',
            fontWeight: 600
        },
        body2: {
            fontSize: 14,
            lineHeight: '24px',
            fontWeight: 600
        },
        caption: {
            fontSize: 12,
            lineHeight: '20px',
            fontWeight: 600
        }
    }

});
export default theme;
