import { Box, Toolbar } from "@mui/material";
import TotalAdStatus from "../components/dashboard/totalAdStatus/TotalAdStatus";
import Dropdown from "../layouts/Dropdown";
import ChannelStatus from "../components/dashboard/channelStatus/ChannelStatus";

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
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", fontSize:"1.5rem", fontWeight:"bold" }}>
        대시보드 <Dropdown />
      </Toolbar>
      <TotalAdStatus />
      <ChannelStatus />
    </Box>
  );
};

export default Dashboard;
