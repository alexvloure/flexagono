import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
// import bgImg from '../../images/bgImg.png';
// import teacherImg from '../../images/teacher.png';
import avatar from '../../images/cyn_about-me.jpg';

const AboutMe = ({ mode }) => {
  return (
    <Box
      sx={{
        minHeight: {xs: 'calc(100vh-95px)', md: '100vh'},
        marginTop: {xs: '95px', md: '0px'},
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: { md: 'space-between', xs: 'center' },
        alignItems: 'center',
        overflow: 'hidden',
      }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          maxWidth: {xs: '100%', md: '50%'},
        }}>
        <Typography variant="h2" sx={{ fontWeight: '500', mb: '20px' }}>
          ¡Vamos a hacer <span style={{ color: '#70C7EE' }}>ciencia</span>!
        </Typography>
        <Typography
          variant="body1"
          sx={{ maxWidth: '550px', textAlign: 'left' }}>
          Hola, mi nombre es Cynthia y he creado Flexágono con la finalidad de
          ayudar y motivar a los alumnos en el ámbito científico.
        </Typography>
      </Box>
      <Box
        sx={{
          maxWidth: {xs: '100%', md: '50%'},
          display: 'flex',
          justifyContent: 'center',
        }}>
        <Box sx={{
          maxWidth: {xs: '100%', md: '85%', borderRadius: '50%'}
        }}>
          <img
            src={avatar}
            alt="avatar"
            style={{
              clipPath: 'circle()',
              maxWidth: '100%',
              objectFit: 'cover',
              background: 'rgba(255,255,255,1)',
            }}></img>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutMe;
