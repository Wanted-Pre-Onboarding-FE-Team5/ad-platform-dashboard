import React from 'react';
//import { useChannelStatusModel } from '../models/useChannelStatusModel';
import StackedBarChart from './StackedBarChart';
import { Box } from '@mui/material';

// type ChannelReportDataType = {
//   // channel-report 데이터 타입
//   channel: string;
//   date: string;
//   imp: number;
//   click: number;
//   cost: number;
//   convValue: number;
//   ctr: number;
//   cvr: number;
//   cpc: number;
//   cpa: number;
//   roas: number;
// };

const ChannelStatus = () => {
  return (
    <Box sx={{ width: '100%', height: '100%' }}>
      <StackedBarChart />
    </Box>
  );
};

export default ChannelStatus;
