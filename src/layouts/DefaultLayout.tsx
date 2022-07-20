import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  Box,
  CssBaseline,
  List,
  ListItem,
  Button,
  Container,
} from "@mui/material";
import Sidebar from "./Sidebar";
import Header from "./Header";

const DefaultLayout = () => {
  const isMobile: boolean = useMediaQuery("(max-width:480px)");
  const [isOpenMobileMenu, setIsOpenMobileMenu] =
    React.useState<boolean>(false);
  const navigate = useNavigate();

  const handleClick = (): void => {
    setIsOpenMobileMenu(!isOpenMobileMenu);
  };

  return (
    <Box sx={{ display: 'flex', maxWidth:"100%" }}>
      <CssBaseline />
      {isMobile ? null : <Sidebar />}

      {/* 헤더 */}
      <Header isMobile={isMobile} isOpenMobileMenu={isOpenMobileMenu} handleClick={handleClick} />

      {/* 모바일 메뉴 */}
      {isMobile && isOpenMobileMenu ? (
        <Container
          sx={{
            position: 'absolute',
            top: `4rem`,
            left: 0,
            width: '100%',
            height: 'auto',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'white',
            zIndex: 10,
          }}
        >

          <List sx={{ width: "100%" }}>
            <ListItem sx={{ display: "flex", flexDirection: "column" }}>
                <Button
                  sx={{
                    border: '1px solid black',
                    height: '3rem',
                    width: '100%',
                  }}
                  onClick={()=>navigate("/")}
                >
                  대시보드
                </Button>
                <Button
                  sx={{
                    border: "1px solid black",
                    height: "3rem",
                    width: "100%",
                    mt:"1rem"
                  }}
                  onClick={()=>navigate("/ad")}
                >
                  광고관리
                </Button>
            </ListItem>
          </List>
        </Container>
      ) : null}

      {/* 페이지 오는 자리 */}
      <Outlet />
    </Box>
  );
};

export default DefaultLayout;
