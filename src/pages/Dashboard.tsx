import React from 'react';
import { Box, Toolbar } from '@mui/material';
import TotalAdStatus from '../components/TotalAdStatus';
import ChannelStatus from '../components/ChannelStatus';

const Dashboard = () => {
  return (
    <Box
      component='main'
      sx={{
        flexGrow: 1,
        bgcolor: '#f5f5f5',
        mt: '4rem',
        width: `calc(100vw - 240px)`,
      }}
    >
      <Toolbar sx={{ color: '#59656b', fontSize: '30px', fontWeight: 'bold' }}>대시 보드</Toolbar>
      <TotalAdStatus />
      <ChannelStatus />
    </Box>
  );
};

export default Dashboard;
