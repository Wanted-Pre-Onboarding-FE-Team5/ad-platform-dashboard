import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

interface HandleClickPropsType {
  (event: React.MouseEvent<HTMLButtonElement>): void;
}

type HeaderPropsType = {
  isMobile: boolean;
  isOpenMobileMenu: boolean;
  handleClick: HandleClickPropsType;
};

const Header = (props: HeaderPropsType) => {
  const { isMobile, isOpenMobileMenu, handleClick } = props;

  return (
    <AppBar sx={{ position: "fixed" }}>
      {/* 햄버거 or 닫기 */}
      {isMobile ? (
        <IconButton
          color="inherit"
          sx={{
            position: "absolute",
            top: "1rem",
            left: "1rem",
            width: "2rem",
            height: "2rem",
            zIndex: 20,
          }}
          onClick={handleClick}
        >
          {isOpenMobileMenu ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      ) : null}

      {/* 아이콘 */}
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "flex-end" }}>
          <IconButton size="large" color="inherit">
            <Badge>
              <MailIcon />
            </Badge>
          </IconButton>
          <IconButton size="large" color="inherit">
            <Badge>
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton size="large" edge="end" color="inherit">
            <AccountCircle />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
