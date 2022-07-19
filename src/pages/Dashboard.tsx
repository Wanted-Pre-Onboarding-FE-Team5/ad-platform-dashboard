import React from "react";
import { Box, Toolbar } from "@mui/material";
import TotalAdStatus from "../components/TotalAdStatus";
import Dropdown from "../components/Dropdown";
//import ChannelStatus from "../components/ChannelStatus";

const Dashboard = () => {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        bgcolor: "#f5f5f5",
        mt: "4rem",
        width: `calc(100vw - 240px)`,
      }}
    >
      <Toolbar>대시 보드</Toolbar>
      {/* 드롭다운 */}  
      <Dropdown />
      
      <TotalAdStatus />
      {/* <ChannelStatus /> */}
    </Box>
  );
};

export default Dashboard;
