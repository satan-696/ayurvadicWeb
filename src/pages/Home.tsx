import { Box } from '@mui/material';
import HeroSection from '../components/home/HeroSection';
import ConcernSection from '../components/home/ConcernSection';
import KeyServices from '../components/home/KeyServices';
import AboutSection from '../components/home/AboutSection';
import TreatmentSection from '../components/home/TreatmentSection';
import PanchakarmaSection from '../components/home/PanchakarmaSection';
import WellnessPrograms from '../components/home/WellnessPrograms';
import ProductShowcase from '../components/home/ProductShowcase';
import Testimonials from '../components/home/Testimonials';
import BlogPreview from '../components/home/BlogPreview';
import GallerySection from '../components/home/GallerySection';
import FAQSection from '../components/home/FAQSection';
import ContactSection from '../components/home/ContactSection';

const Home = () => {
    return (
        <Box>
            <HeroSection />
            <ConcernSection />
            <KeyServices />
            <AboutSection />
            <PanchakarmaSection />
            <TreatmentSection />
            <WellnessPrograms />
            <ProductShowcase />
            <GallerySection />
            <Testimonials />
            <BlogPreview />
            <FAQSection />
            <ContactSection />
        </Box>
    );
};

export default Home;
