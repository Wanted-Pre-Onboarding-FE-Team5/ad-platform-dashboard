import React from 'react';
import StackedBarChart from './StackedBarChart';
import BasicTable from './BasicTable';
import { ChannelStatusType } from "../../../models/types";
import { dataService, getChannelStatusData } from '../../../api/api';
import { Box, Container, Typography } from '@mui/material';

const ChannelStatus = () => {
  const [channelState, setChannelState] = React.useState<ChannelStatusType[]>();

  React.useEffect(() => {
    getChannelStatusData(dataService("channelStatus"),"")
    .then((data) => setChannelState(data))
    .catch(() => console.log("data dispatch error"))
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
