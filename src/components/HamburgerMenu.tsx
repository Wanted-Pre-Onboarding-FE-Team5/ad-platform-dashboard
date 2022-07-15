import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/material";

const HamburgerMenu = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const handleClick = (): void => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <Button
      sx={{
        width: "30px",
        height: "30px",
        bgcolor: "white",
        border: "1px solid black",
      }}
      onClick={handleClick}
    >
      {/* @mui/material-icons인가 mui아이콘 라이브러리 다운받으면 햄버거 아이콘으로 대체 */}
      메뉴
    </Button>
  );
};

export default HamburgerMenu;
