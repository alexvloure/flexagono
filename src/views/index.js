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

const MainComponent = () => {
  const aboutMe = useRef(null);
  const pricing = useRef(null);
  const contact = useRef(null);

  return (
    <ThemeContext.Consumer>
      {({ mode, toggleMode }) => (
        <Box className="container">
          <Navbar aboutMeRef={aboutMe} pricingRef={pricing} contactRef={contact} toggleMode={toggleMode} />
          <Box ref={aboutMe} className="section">
            <AboutMe mode={mode} />
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

// <Swiper
//   direction={'vertical'}
//   slidesPerView={1}
//   spaceBetween={30}
//   mousewheel={true}
//   pagination={{
//     clickable: true,
//   }}
//   modules={[Mousewheel, Pagination]}
//   className="mySwiper"
//   navigation={{
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   }}
//   sx={{
//     height: '100vh',
//     position: 'inherit',
//   }}>
//   <SwiperSlide>
//     <Box
//       sx={{
//         // background:
//         //   mode === 'light'
//         //     ? `url(${backgroundLightImg})`
//         //     : `url(${backgroundDarkImg})`,
//         // backgroundSize: 'cover',
//         backgroundImage:
//           mode === 'light'
//             ? 'linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)'
//             : 'background-image: linear-gradient(to top, #434343 0%, black 100%);',
//         height: '100vh',
//       }}>
//       <Navbar
//         toggleMode={toggleMode}
//         sx={{
//           maxWidth: '1920px',
//         }}
//       />
//       <AboutMe mode={mode} />
//     </Box>
//   </SwiperSlide>
//   <SwiperSlide>
//     <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
//       Slide 2
//     </Box>
//   </SwiperSlide>
//   <SwiperSlide>
//     <PriceCarousel sx={{ height: '100vh'}}/>
//   </SwiperSlide>
// </Swiper>
