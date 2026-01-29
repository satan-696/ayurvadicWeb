import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button, Chip } from '@mui/material';
import { ShoppingCart } from 'lucide-react';

// Mock Data
const products = [
    {
        id: 1,
        name: 'Immunity Booster',
        category: 'Supplements',
        price: 499,
        image: 'https://pixabay.com/images/download/cat-9477804_1920.jpg'
    },
    {
        id: 2,
        name: 'Hair Growth Oil',
        category: 'Personal Care',
        price: 350,
        image: 'https://pixabay.com/images/download/cat-9477804_1920.jpg'
    },
    {
        id: 3,
        name: 'Digestive Aid Syrup',
        category: 'Medicine',
        price: 220,
        image: 'https://pixabay.com/images/download/cat-9477804_1920.jpg'
    },
    {
        id: 4,
        name: 'Pain Relief Oil',
        category: 'Pain Management',
        price: 180,
        image: 'https://pixabay.com/images/download/cat-9477804_1920.jpg'
    }
];

const ProductShowcase = () => {
    return (
        <Box sx={{ py: 10, bgcolor: '#fff' }} id="shop">
            <Container maxWidth="lg">
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', mb: 6 }}>
                    <Box>
                        <Typography variant="overline" color="secondary" fontWeight={700} sx={{ letterSpacing: 2 }}>
                            SHOP AYURVEDA
                        </Typography>
                        <Typography variant="h3" sx={{ fontWeight: 700, color: 'primary.main' }}>
                            Best Selling Formulations
                        </Typography>
                    </Box>
                    <Button variant="outlined" color="primary" sx={{ borderRadius: 2 }}>
                        View All Products
                    </Button>
                </Box>

                <Grid container spacing={4}>
                    {products.map((product) => (
                        <Grid item xs={12} sm={6} md={3} key={product.id}>
                            <Card sx={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                borderRadius: 3,
                                transition: '0.3s',
                                '&:hover': { transform: 'translateY(-8px)', boxShadow: 6 }
                            }}>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={product.image}
                                    alt={product.name}
                                    sx={{ objectFit: 'cover' }}
                                />
                                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                    <Chip
                                        label={product.category}
                                        size="small"
                                        sx={{ alignSelf: 'start', mb: 1, bgcolor: '#F3F6EF', color: 'primary.main', fontWeight: 600 }}
                                    />
                                    <Typography variant="h6" fontWeight={600} gutterBottom>
                                        {product.name}
                                    </Typography>
                                    <Box sx={{ mt: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Typography variant="h6" color="secondary" fontWeight={700}>
                                            ₹{product.price}
                                        </Typography>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            size="small"
                                            sx={{ borderRadius: 2, minWidth: 40, p: 1 }}
                                        >
                                            <ShoppingCart size={18} />
                                        </Button>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default ProductShowcase;
