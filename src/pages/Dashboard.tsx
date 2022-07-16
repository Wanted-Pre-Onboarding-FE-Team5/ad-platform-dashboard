import React from "react";
import { Box, Toolbar } from "@mui/material";
import TotalAdStatus from "../components/TotalAdStatus";
import ChannelStatus from "../components/ChannelStatus";

const Dashboard = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Toolbar>대시 보드</Toolbar>
      <TotalAdStatus />
      <ChannelStatus />
    </Box>
  );
};

export default Dashboard;
