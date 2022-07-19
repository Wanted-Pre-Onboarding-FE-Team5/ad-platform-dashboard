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
      <Toolbar>대시 보드 <Dropdown /></Toolbar>     
      <TotalAdStatus />
      <ChannelStatus />
    </Box>
  );
};

export default Dashboard;
