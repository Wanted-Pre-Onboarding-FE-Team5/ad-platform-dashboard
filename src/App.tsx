import React from "react";
import { Box } from "@mui/material";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
//Dashboard 라는 컴포넌트가 mui에 존재함..

//Box의 width -> min-? max-?
const App = () => {
  return (
    <Box>
      <Home>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            bgcolor: "#f5f5f5",
            mt: "4rem",
            width: `calc(100vw - 240px)`,
          }}
        >
          <Dashboard />
        </Box>
      </Home>
    </Box>
  );
};

export default App;
