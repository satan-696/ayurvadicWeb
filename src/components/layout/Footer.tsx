import { Box, Container, Typography, Grid, Link, Snackbar, Alert } from '@mui/material';
import { useState } from 'react';

const Footer = () => {
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleLinkClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setOpenSnackbar(true);
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    return (
        <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 6, mt: 'auto' }}>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" gutterBottom>
                            Rhichik Ayurveda
                        </Typography>
                        <Typography variant="body2">
                            Healing Naturally, Living Holistically. Your journey to authentic Ayurvedic wellness starts here.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" gutterBottom>
                            Quick Links
                        </Typography>
                        <Link href="#" onClick={handleLinkClick} color="inherit" display="block" sx={{ mb: 1, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>Home</Link>
                        <Link href="#" onClick={handleLinkClick} color="inherit" display="block" sx={{ mb: 1, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>About Us</Link>
                        <Link href="#" onClick={handleLinkClick} color="inherit" display="block" sx={{ mb: 1, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>Products</Link>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" gutterBottom>
                            Contact Us
                        </Typography>
                        <Typography variant="body2">
                            Email: info@rhichikayurveda.com<br />
                            Phone: +91 1234567890<br />
                            Address: Haridwar, Uttarakhand, India
                        </Typography>
                    </Grid>
                </Grid>
                <Box sx={{ mt: 4, pt: 2, borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
                    <Typography variant="body2">
                        © {new Date().getFullYear()} Rhichik Ayurveda. All rights reserved.
                    </Typography>
                </Box>
            </Container>
            <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={handleCloseSnackbar} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                <Alert onClose={handleCloseSnackbar} severity="info" sx={{ width: '100%' }}>
                    🚧 Coming soon – Backend integration under development
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default Footer;
