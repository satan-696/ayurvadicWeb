import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#305724', // Deep Brand Green
            light: '#4a7d3a',
            dark: '#1e3816',
            contrastText: '#fff',
        },
        secondary: {
            main: '#F26F21', // Action Orange
            light: '#ff9e5e',
            dark: '#b84d0d',
            contrastText: '#fff',
        },
        background: {
            default: '#F3F6EF', // Soft Organic Background
            paper: '#FFFFFF',
        },
        text: {
            primary: '#1d1d1d',
            secondary: '#555555',
        }
    },
    typography: {
        fontFamily: '"Inter", "Outfit", "Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontWeight: 700,
            color: '#305724',
        },
        h2: {
            fontWeight: 700,
            color: '#305724',
        },
        h3: {
            fontWeight: 600,
            color: '#305724',
        },
        h4: {
            fontWeight: 600,
            color: '#305724',
        },
        h5: {
            fontWeight: 600,
        },
        h6: {
            fontWeight: 600,
        },
        button: {
            fontWeight: 600,
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    textTransform: 'none',
                    boxShadow: 'none',
                    '&:hover': {
                        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                    },
                },
                containedPrimary: {
                    backgroundColor: '#305724',
                    '&:hover': {
                        backgroundColor: '#25441c',
                    },
                },
                containedSecondary: {
                    backgroundColor: '#F26F21',
                    color: '#fff',
                    '&:hover': {
                        backgroundColor: '#d95d15',
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                    boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                    border: '1px solid #e0e0e0',
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: 'none',
                }
            }
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    borderRadius: 6,
                    fontWeight: 500,
                }
            }
        }
    },
});
