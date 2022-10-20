import { styled, Typography } from '@mui/material';
import Box from '@mui/material/Box';
// import Carousel from 'react-material-ui-carousel';
// import img1 from '../../images/img_1.jpg';
// import img2 from '../../images/img_2.jpg';
// import img3 from '../../images/img_3.jpg';

// styled(TextField)(({ theme }) => ({
const StyledCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'center',
  [theme.breakpoints.up('md')]: {
    width: '33%',
  },
  width: '90%',
  [theme.breakpoints.up('md')]: {
    minHeight: '100%',
  },
  minHeight: '350px',
  borderRadius: '5%',
  boxShadow: '20px 20px 50px rgba(0,0,0,0.3)',
  borderTop: '1px solid rgba(255,255,255,0.5)',
  borderLeft: '1px solid rgba(255,255,255,0.5)',
  backdropFilter: 'blur(5px)',
  background: 'rgba(255,255,255,0.6)',
  overflow: 'hidden',
  // transition: 'ease-in-out 0.2s',
  // backfaceVisibility: 'hidden',
  ':hover': {
    // transform: 'scale(1.05)',
    // transform: 'perspective(10px) translateZ(0)',
    // backdropFilter: 'none',
    // transition: 'ease-in-out 0.2s',
  },
}));

const Pricing = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          height: {xs: '100%', md: '60vh'},
        }}>
        <Typography variant="h4" sx={{ textAlign: 'center', mb: '5%', fontWeight: '500' }}>
          Tarifas
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'flex-start',
            alignItems: {xs: 'center', md: 'flex-start'},
            width: '100%',
            height: '75%',
            gap: '30px',
          }}>
          <StyledCard>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
              <Typography variant="h5" sx={{ mt: '10%' }}>
                Individual
              </Typography>
              <Box
                sx={{ mt: '10px', borderTop: '1px solid black', width: '25%' }}
              />
            </Box>
            <Box sx={{ width: '100%', mt: '20px' }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  mx: '20%',
                }}>
                <Typography sx={{ fontSize: '1.1rem' }}>Primaria</Typography>
                <Typography sx={{ fontSize: '1.1rem' }}>12€/h</Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  mx: '20%',
                }}>
                <Typography sx={{ fontSize: '1.1rem' }}>ESO</Typography>
                <Typography sx={{ fontSize: '1.1rem' }}>15€/h</Typography>
              </Box>
            </Box>
            <Typography
              variant="body2"
              sx={{ mt: '10%', mx: '10%', textAlign: 'center', height: '8%' }}>
              Clases privadas para un único alumno
            </Typography>
          </StyledCard>
          <StyledCard>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
              <Typography variant="h5" sx={{ mt: '10%' }}>
                Dúo
              </Typography>
              <Box
                sx={{ mt: '10px', borderTop: '1px solid black', width: '25%' }}
              />
            </Box>
            <Box sx={{ width: '100%', mt: '20px' }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  mx: '20%',
                }}>
                <Typography sx={{ fontSize: '1.1rem' }}>Primaria</Typography>
                <Typography sx={{ fontSize: '1.1rem' }}>7€/h</Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  mx: '20%',
                }}>
                <Typography sx={{ fontSize: '1.1rem' }}>ESO</Typography>
                <Typography sx={{ fontSize: '1.1rem' }}>10€/h</Typography>
              </Box>
            </Box>
            <Typography
              variant="body2"
              sx={{ mt: '10%', mx: '10%', textAlign: 'center', height: '8%' }}>
              Clases para dos alumnos de cualquier curso
            </Typography>
          </StyledCard>
          <StyledCard>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
              <Typography variant="h5" sx={{ mt: '10%' }}>
                Grupo
              </Typography>
              <Box
                sx={{ mt: '10px', borderTop: '1px solid black', width: '25%' }}
              />
            </Box>
            <Box sx={{ width: '100%', mt: '20px' }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  mx: '20%',
                }}>
                <Typography sx={{ fontSize: '1.1rem' }}>Primaria</Typography>
                <Typography sx={{ fontSize: '1.1rem' }}>5€/h</Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  mx: '20%',
                }}>
                <Typography sx={{ fontSize: '1.1rem' }}>ESO</Typography>
                <Typography sx={{ fontSize: '1.1rem' }}>8€/h</Typography>
              </Box>
            </Box>
            <Typography
              variant="body2"
              sx={{ mt: '10%', mx: '10%', textAlign: 'center', height: '8%' }}>
              Clases colectivas de mínimo tres y hasta cinco alumnos del mismo curso
            </Typography>
          </StyledCard>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            width: '100%',
            margin: '20px 0 0 20px',
          }}>
          <Typography variant="body2" sx={{ color: '#505050' }}>
            *Consultar para bachiller
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Pricing;
