import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';

const Footer = () => {
  return(
  <Box mt="80px" bgcolor="lightgrey">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
     <h1>FitFolio</h1>
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px"><pre>Contact: +91 9999999999      email: fitfolio@gmail.com</pre></Typography>
  </Box>)
};

export default Footer;
