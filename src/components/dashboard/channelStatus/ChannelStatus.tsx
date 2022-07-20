import React from 'react';
import StackedBarChart from './StackedBarChart';
import BasicTable from './BasicTable';
import { Box, Container, Typography } from '@mui/material';

const ChannelStatus = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography sx={{ mb: 3, fontWeight: 'bold' }}>매체 현황</Typography>
      <Container
        sx={{
          bgcolor: 'white',
          borderRadius: '20px',
        }}
      >
        <Container sx={{ display: 'flex', justifyContent: 'center', p: 5, flexDirection: 'column' }}>
          <StackedBarChart />
          <BasicTable />
        </Container>
      </Container>
    </Box>
  );
};

export default ChannelStatus;
