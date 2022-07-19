import React from 'react';
import StackedBarChart from './StackedBarChart';
import BasicTable from './BasicTable';
import { Box, Container, Typography } from '@mui/material';
import { useChannelStatusModel } from '../models/useChannelStatusModel';
import { ChannelStatusType } from '../models/types/index';

const ChannelStatus = () => {
  const { getChannelStatus } = useChannelStatusModel();

  const [channelState, setChannelState] = React.useState<ChannelStatusType[]>();
  React.useEffect(() => {
    getChannelStatus('').then((data) => setChannelState(data));
  }, []);
  console.log(channelState);

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
