import React from "react";
import { Box, Button } from "@mui/material";

const HamburgerMenu = () => {
  return (
    <Box sx={{ width: "30px", height: "30px", border: "1px solid black" }}>
      <Button sx={{ bgcolor: "white" }}>
        {/* @mui/material-icons인가 mui아이콘 라이브러리 다운받으면 햄버거 아이콘으로 대체 */}
        삼
      </Button>
    </Box>
  );
};

export default HamburgerMenu;
