import React from 'react';
import { Box, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const Contact = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: {xs: '100px', md: '0'},
        marginBottom: {xs: '25px', md: '0'}
      }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '60%',
        }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'center',
            width: '100%',
            height: { xs: '100vh', md: '500px' },
            // borderRadius: '2%',
          }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              // background: 'rgba(255,255,255,0.6)',
              // borderBottomLeftRadius: { xs: '0', md: '2%' },
              // borderTopLeftRadius: '2%',
              // borderTopRightRadius: { xs: '2%', md: '0' },
              width: { xs: '100%', md: '50%' },
              height: '100%',
            }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '40px',
                marginBottom: {xs: '25px', md: '0'},
              }}>
              <Typography
                variant="h5"
                sx={{ textAlign: 'center', mb: '2%', fontWeight: '500' }}>
                Contacto
              </Typography>
              <Typography sx={{ textAlign: 'center' }}>
                Cynthia Rodríguez Landeira
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
                <EmailIcon />
                <a style={{color: 'black', textDecoration: 'none'}} href="mailto:academiaflexagono@gmail.com">
                  academiaflexagono@gmail.com
                </a>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
                <InstagramIcon />
                <a
                  target="_blank"
                  style={{
                    color: 'black',
                    textDecorationColor: 'black',
                  }}
                  href="https://www.instagram.com/academiaflexagono"
                  rel="noreferrer">
                  @academiaflexagono
                </a>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
                <LocalPhoneIcon />
                <a
                  style={{ color: 'black', textDecoration: 'none' }}
                  href="tel:+34626139839"
                  rel="noreferrer">
                  626 13 98 39
                </a>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
                <LocationOnIcon />
                <a
                  target="_blank"
                  style={{
                    color: 'black',
                    textDecoration: 'none',
                  }}
                  href="https://goo.gl/maps/fQK7297DXFsvqJgA8"
                  rel="noreferrer">
                  Rúa Faxón, 24 - Val do Dubra - 15873
                </a>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
                <CalendarMonthIcon />
                <Typography>Lunes - Viernes de 15:00h a 22:00h</Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              // background: '#11ff99',
              // borderTopRightRadius: { xs: '0', md: '2%' },
              // borderBottomRightRadius: '2%',
              // borderBottomLeftRadius: { xs: '2%', md: '0' },
              width: { xs: '100%', md: '50%' },
              height: '100%',
            }}>
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2916.84668109235!2d-8.656725484378132!3d43.02361420092997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2ef1b0f7a667f1%3A0xfacbe798970528e2!2sFlex%C3%A1gono!5e0!3m2!1ses!2ses!4v1661450025534!5m2!1ses!2ses"
              width="100%"
              height="100%"
              style={{
                border: '0',
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
