import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import { ThemeContext } from '../App';
import Box from '@mui/material/Box';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Mousewheel, Pagination } from 'swiper';
import Pricing from './components/Pricing';
// import backgroundLightImg from '../images/backgroundLightImg.jpg';
// import backgroundDarkImg from '../images/backgroundDarkImg.jpg';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import 'swiper/css';
import 'swiper/css/pagination';
import Footer from './components/Footer';
import Methodology from './components/Methodology';

const MainComponent = () => {
  const aboutMe = useRef(null);
  const pricing = useRef(null);
  const contact = useRef(null);
  const methodology = useRef(null);

  return (
    <ThemeContext.Consumer>
      {({ mode, toggleMode }) => (
        <Box className="container">
          <Navbar aboutMeRef={aboutMe} methodologyRef={methodology} pricingRef={pricing} contactRef={contact} toggleMode={toggleMode} />
          <Box ref={aboutMe} className="section">
            <AboutMe mode={mode} />
          </Box>
          <Box ref={methodology} className="section" sx={{ minHeight: '80vh', scrollMarginTop: {xs: '120px', md: '250px'}}}>
            <Methodology />
          </Box>
          <Box ref={pricing} className="section" sx={{ minHeight: '80vh', scrollMarginTop: {xs: '120px', md: '200px'}}}>
            <Pricing />
          </Box>
          <Box ref={contact} className="section" sx={{ minHeight: '70vh'}}>
            <Contact />
          </Box>
          <Box className="footer" sx={{backgroundColor: '#E6E1E0'}}>
            <Footer />
          </Box>
        </Box>
      )}
    </ThemeContext.Consumer>
  );
};

export default MainComponent;
