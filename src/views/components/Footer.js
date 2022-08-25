import { Box, Typography } from '@mui/material';
import logoFlexagono from '../../images/Logo-02.png';

const Footer = () => {
  return (
    <Box
      sx={{
        maxWidth: '1200px',
        width: '100%',
        minHeight: '130px',
        padding: '15px 0',
        positon: 'fixed',
        bottom: '0',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <img
        src={logoFlexagono}
        alt="logo"
        style={{
          maxWidth: '36px',
          marginRight: '20px',
          filter: 'grayscale(90%)',
        }}
      />
      <Typography variant="body2">Copyright © 2022 Flexágono</Typography>
      <Typography sx={{ fontSize: '0.75rem' }}>
        Developed with&nbsp;<span style={{ fontSize: '0.7rem' }}>🖤</span>
        &nbsp;by&nbsp;
        <a
          target="_blank"
          style={{ color: 'black', textDecorationColor: 'black' }}
          href="https://github.com/alexvloure"
          rel="noreferrer">
          @alexvloure
        </a>
      </Typography>
    </Box>
  );
};

export default Footer;
