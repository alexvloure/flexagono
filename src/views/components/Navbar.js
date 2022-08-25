import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  IconButton,
  Drawer,
  ListItem,
  ListItemIcon,
  ListItemText,
  List,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import EuroIcon from '@mui/icons-material/Euro';
import CallIcon from '@mui/icons-material/Call';
import logoFlexagono from '../../images/Logo-02.png';

const pages = ['Tarifas', 'Contacto'];

const Navbar = ({ aboutMeRef, pricingRef, contactRef, toggleMode }) => {
  const [open, setOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const changeNavbarBackground = () => {
    if (window.innerWidth < 900) {
      if (window.scrollY >= 15) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    } else {
      if (window.scrollY >= 66) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    }
  };

  useEffect(() => {
    function changeBg() {
      window.addEventListener('scroll', changeNavbarBackground);
    }
    changeBg();
    return () => {
      window.removeEventListener('scroll', changeNavbarBackground);
    };
  });

  // const handleToggleMode = () => {
  //   toggleMode();
  // };

  const handleScrollToTop = () => {
    aboutMeRef.current.scrollIntoView();
  };

  const handleScrollTo = (e) => {
    switch (e.target.innerText) {
      case 'Tarifas':
        setTimeout(() => {
          pricingRef.current.scrollIntoView();
        }, 10);
        break;
      case 'Contacto':
        setTimeout(() => {
          contactRef.current.scrollIntoView();
        }, 10);
        break;
      default:
        setTimeout(() => {
          aboutMeRef.current.scrollIntoView();
        }, 10);
        break;
    }
  };

  const handleOpenDrawer = () => {
    setOpen(true);
  };

  const handleCloseDrawer = () => {
    setOpen(false);
  };

  const selectIconDict = {
    0: <HomeIcon />,
    1: <EuroIcon />,
    2: <CallIcon />,
  };

  const SideList = (side) => (
    <Box
      sx={{ width: '250px' }}
      role="presentation"
      onClick={() => handleCloseDrawer()}
      onKeyDown={() => handleCloseDrawer()}>
      <List>
        {['Inicio', 'Tarifas', 'Contacto'].map((text, index) => (
          <ListItem button key={text} onClick={(e) => handleScrollTo(e)}>
            <ListItemIcon>{selectIconDict[index]}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box
      className={navbar ? 'navbar' : ''}
      sx={{
        position: 'fixed',
        top: 0,
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'center',
        width: '100vw',
        minHeight: '95px',
      }}>
      <Box
        sx={{
          position: 'fixed',
          zIndex: 999,
          top: 0,
          margin: '0 auto',
          p: { xs: '0 10px', md: '0 20px' },
          backgroundColor: 'transparent',
          backgroundImage: 'none',
          boxShadow: 'none',
          minHeight: '95px',
          maxWidth: '1200px',
          width: '100%',
          display: 'flex',
          justifyContent: { xs: 'flex-start', md: 'space-between' },
          alignItems: 'center',
        }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={() => handleOpenDrawer()}
          color="inherit"
          sx={{
            display: { xs: 'inherit', md: 'none' },
            marginRight: '25px',
          }}>
          <MenuIcon />
        </IconButton>
        <Box
          onClick={() => handleScrollToTop()}
          sx={{
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
          }}>
          <Typography
            variant="h4"
            noWrap
            component="a"
            sx={{
              mr: 2,
              fontWeight: 500,
              color: 'inherit',
              textDecoration: 'none',
              lineHeight: 1.25,
            }}>
            Flexágono
          </Typography>
          <img
            src={logoFlexagono}
            alt="logo"
            style={{
              maxWidth: '45px',
            }}
          />
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          {pages.map((page) => (
            <Typography
              key={page}
              onClick={(e) => handleScrollTo(e)}
              component="a"
              variant="h6"
              sx={{
                my: 2,
                mx: 4,
                fontWeight: 500,
                display: 'block',
                cursor: 'pointer',
              }}>
              {page}
            </Typography>
          ))}
        </Box>
      </Box>
      <Drawer
        open={open}
        onClose={() => handleCloseDrawer()}
        sx={{ zIndex: 1001 }}>
        {SideList('left')}
      </Drawer>
    </Box>
  );
};

export default Navbar;
