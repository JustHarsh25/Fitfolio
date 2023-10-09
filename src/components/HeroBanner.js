import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png';
import { grey } from '@mui/material/colors';

const HeroBanner = () => (
  <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative"  p="20px">
    <Typography color="#FF2625" fontWeight="600" fontSize="60px">FitFolio</Typography>
    <Typography fontWeight={700} sx={{ fontSize: { lg: '45px', xs: '40px' } }} mb="23px" mt="30px">
    “The real workout starts  <br />when you want to stop.”
     
    </Typography>
    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px" mb={4}>
      Check out the most effective exercises personalized to you
    </Typography>
      <Button variant='contained' color='error' sx={{ backgroundColor: '#ff2625', padding: '10px' }}   href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises
      </Button>
    <Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.3', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
      WORKOUT.
    </Typography>
    <img src={HeroBannerImage} style={{width:'800px'}} alt="hero-banner" className="hero-banner-img" />
  </Box>
);

export default HeroBanner;
