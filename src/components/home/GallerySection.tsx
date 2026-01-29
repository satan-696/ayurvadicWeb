import { Box, Container, Typography, ImageList, ImageListItem } from '@mui/material';

import therapyRoom from '../../assets/gallery/therapy-room.png';
import consultation from '../../assets/gallery/consultation.png';
import herbs from '../../assets/gallery/herbs.png';
import products from '../../assets/gallery/products.png';
import massage from '../../assets/gallery/massage.png';
import aroma from '../../assets/gallery/aroma.png';

const itemData = [
    {
        img: therapyRoom,
        title: 'Therapy Room',
        rows: 2,
        cols: 2,
    },
    {
        img: consultation,
        title: 'Consultation',
    },
    {
        img: herbs,
        title: 'Herbs Preparation',
    },
    {
        img: products,
        title: 'Products',
        cols: 2,
    },
    {
        img: massage,
        title: 'Massage',
        cols: 2,
    },
    {
        img: aroma,
        title: 'Aroma Therapy',
        rows: 2,
        cols: 2,
    },
];

function srcset(image: string, size: number, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows
            }&fit=crop&auto=format&dpr=2 2x`,
    };
}

const GallerySection = () => {
    return (
        <Box sx={{ py: 10, bgcolor: '#F3F6EF' }}>
            <Container maxWidth="lg">
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                    <Typography variant="overline" color="secondary" fontWeight={700} sx={{ letterSpacing: 2 }}>
                        GALLERY
                    </Typography>
                    <Typography variant="h3" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
                        Inside Rhichik Ayurveda
                    </Typography>
                </Box>
                <ImageList
                    variant="quilted"
                    cols={4}
                    rowHeight={121}
                    gap={16}
                >
                    {itemData.map((item) => (
                        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                            <img
                                {...srcset(item.img, 121, item.rows, item.cols)}
                                alt={item.title}
                                loading="lazy"
                                style={{ borderRadius: '12px' }}
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Container>
        </Box>
    );
};

export default GallerySection;
