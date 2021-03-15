import { createMuiTheme } from '@material-ui/core';

export const darkTheme = createMuiTheme({
    palette: {
        type: 'dark',
        // TODO: Remove in the future if not used
        background: {
            gray1: '#4F4F4F',
            gray2: '#5C5C5C',
            gray3: "#B5B5B5",
        }
    }
});

export const lightTheme = createMuiTheme({
    palette: {
        type: 'light',
    }
});