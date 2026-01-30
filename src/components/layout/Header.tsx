import { AppBar, Toolbar, Typography, Button, Container, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import logo from '../../assets/logo.png';

const Header = () => {
    const navigate = useNavigate();
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const navItems = [
        { label: 'Home', path: '/' },
        { label: 'Treatments', path: '/treatments' },
        { label: 'Panchakarma', path: '/panchakarma' },
        { label: 'About Us', path: '/about' },
        { label: 'Shop', path: '/shop' },
        { label: 'Contact', path: '/contact' },
    ];

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Box sx={{ my: 2 }}>
                <img src={logo} alt="Rhichik Ayurveda" style={{ height: '40px', objectFit: 'contain' }} />
            </Box>
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.label} disablePadding>
                        <Button
                            onClick={() => navigate(item.path)}
                            sx={{ textAlign: 'center', width: '100%', color: 'text.primary' }}
                        >
                            <ListItemText primary={item.label} />
                        </Button>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <AppBar position="sticky" sx={{ bgcolor: 'background.paper', borderBottom: '1px solid #eee' }} elevation={0}>
            <Container maxWidth="lg">
                <Toolbar disableGutters sx={{ height: 80 }}>
                    <Box
                        sx={{
                            flexGrow: 1,
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center'
                        }}
                        onClick={() => navigate('/')}
                    >
                        <img src={logo} alt="Rhichik Ayurveda" style={{ height: '60px', objectFit: 'contain' }} />
                    </Box>

                    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
                        {navItems.map((item) => (
                            <Button
                                key={item.label}
                                onClick={() => navigate(item.path)}
                                sx={{ fontWeight: 600, color: 'text.primary', '&:hover': { color: 'primary.main', bgcolor: 'transparent' } }}
                            >
                                {item.label}
                            </Button>
                        ))}
                        <Button
                            variant="contained"
                            color="secondary"
                            sx={{ ml: 2, borderRadius: 2, px: 3, fontWeight: 700, boxShadow: 2 }}
                            onClick={() => navigate('/book-appointment')}
                        >
                            Book Appointment
                        </Button>
                    </Box>

                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ ml: 2, display: { md: 'none' }, color: 'text.primary' }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </Container>
            <Box component="nav">
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </AppBar>
    );
};

export default Header;
