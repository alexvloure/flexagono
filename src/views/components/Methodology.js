import { Box, Typography } from '@mui/material';

const Methodology = () => {
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
          height: { xs: '100%', md: '50vh' },
        }}>
        <Typography
          variant="h4"
          sx={{ textAlign: 'center', mb: '15px', fontWeight: '500' }}>
          Metodología
        </Typography>
        <Typography
          variant="h6"
          sx={{ textAlign: 'center', mb: '30px', fontWeight: '500' }}>
          Aprender de la forma más{' '}
          <span style={{ color: '#70C7EE' }}>didáctica</span> posible
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: {xs: 'center', md: 'flex-start'},
            flexDirection: { xs: 'column', md: 'row' },
            width: '100%',
            maxWidth: '800px',
            height: '100%',
            gap: '30px',
            marginBottom: '50px',
          }}>
          <Box sx={{ width: {xs: '100%', md: '50%'} }}>
            <Typography variant="body1">
              Nunca he sido de esas personas capaces de retener grandes
              cantidades de información "chapando", como suelen denominarlo, y
              si conseguía retenerla era por un corto periodo de tiempo sumado a
              un gran esfuerzo . Es por eso que en mis clases me encargo de que
              la palabra "chapar" no exista.
              <br />
              <br />
              Es cierto que hay cosas que debemos memorizar y no nos queda otra
              opción, por ejemplo,la tabla de multiplicar, pero la manera en que
              la aprendemos puede ser entretenida, siempre existen "truquitos"
              que ayudan a los niños a recordar de forma más eficiente.
            </Typography>
          </Box>
          <Box sx={{ width: {xs: '100%', md: '50%'} }}>
            <Typography variant="body1">
              {/* <br /> */}
              {/* <br /> */}
              Propongo una forma de trabajo entretenida, donde tanto alumno como
              profesor interactúan consiguiendo mejores resultados, considero
              que ambos aprenden. A veces las cosas se pueden hacer pesadas por
              eso siempre viene bien introducir algún juego que motive al alumno
              además de dar alguna curiosidad a mayores que pueda utilizar en un
              futuro. No se trata solo de reforzar sino de buscar un paso más,
              conseguir aprovechar todas sus capacidades.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Methodology;
