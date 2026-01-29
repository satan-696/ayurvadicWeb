import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import logo from '../../assets/logo.png';

const Header = () => {
    const navigate = useNavigate();

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
                        <Button onClick={() => navigate('/')} sx={{ fontWeight: 600, color: 'text.primary', '&:hover': { color: 'primary.main', bgcolor: 'transparent' } }}>Home</Button>
                        <Button onClick={() => navigate('/treatments')} sx={{ fontWeight: 600, color: 'text.primary', '&:hover': { color: 'primary.main', bgcolor: 'transparent' } }}>Treatments</Button>
                        <Button onClick={() => navigate('/panchakarma')} sx={{ fontWeight: 600, color: 'text.primary', '&:hover': { color: 'primary.main', bgcolor: 'transparent' } }}>Panchakarma</Button>
                        <Button onClick={() => navigate('/about')} sx={{ fontWeight: 600, color: 'text.primary', '&:hover': { color: 'primary.main', bgcolor: 'transparent' } }}>About Us</Button>
                        <Button onClick={() => navigate('/shop')} sx={{ fontWeight: 600, color: 'text.primary', '&:hover': { color: 'primary.main', bgcolor: 'transparent' } }}>Shop</Button>
                        <Button onClick={() => navigate('/contact')} sx={{ fontWeight: 600, color: 'text.primary', '&:hover': { color: 'primary.main', bgcolor: 'transparent' } }}>Contact</Button>
                        <Button
                            variant="contained"
                            color="secondary"
                            sx={{ ml: 2, borderRadius: 2, px: 3, fontWeight: 700, boxShadow: 2 }}
                            onClick={() => navigate('/book-appointment')}
                        >
                            Book Appointment
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
