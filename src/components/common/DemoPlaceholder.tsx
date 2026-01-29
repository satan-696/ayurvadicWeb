import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const DemoPlaceholder = () => {
    const navigate = useNavigate();
    return (
        <Box sx={{
            height: '60vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            p: 3
        }}>
            <Typography variant="h4" gutterBottom>🚧 Coming soon – Backend integration under development</Typography>
            <Button variant="contained" onClick={() => navigate('/')}>
                Back to Home
            </Button>
        </Box>
    );
};

export default DemoPlaceholder;
