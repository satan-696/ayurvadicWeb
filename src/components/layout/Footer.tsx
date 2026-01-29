import { Box, Container, Typography, Grid, Link } from '@mui/material';

const Footer = () => {
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
                        <Link href="/" color="inherit" display="block" sx={{ mb: 1 }}>Home</Link>
                        <Link href="/about" color="inherit" display="block" sx={{ mb: 1 }}>About Us</Link>
                        <Link href="/products" color="inherit" display="block" sx={{ mb: 1 }}>Products</Link>
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
        </Box>
    );
};

export default Footer;
