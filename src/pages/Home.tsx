import React, { ReactNode } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  Box,
  CssBaseline,
  IconButton,
  List,
  ListItem,
  Button,
  Container,
} from "@mui/material";
import Sidebar from "../components/Sidebar";

const menuWidth = 240; //-> type? enum?
type ChildrenType = {
  children: ReactNode;
};

//isOpenMobileMenu가 true인 상태에서 480px 이상 커지면 초기화하기
//header 부분 z-index 수정. 자꾸 다른 컴포넌트 밑으로 들어감
const Home = ({ children }: ChildrenType) => {
  const isMobile: boolean = useMediaQuery("(max-width:480px)");
  const [isOpenMobileMenu, setIsOpenMobileMenu] =
    React.useState<boolean>(false);

  const handleClick = (): void => {
    setIsOpenMobileMenu(!isOpenMobileMenu);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {isMobile ? null : <Sidebar menuWidth={menuWidth} />}
      {/* 헤더 부분 안에 햄버거 */}
      <Box
        position="fixed"
        sx={{
          width: `calc(100% - ${isMobile ? 0 : menuWidth}px)`,
          height: `4rem`,
          ml: `${isMobile ? 0 : menuWidth}px`,
          display: "flex",
          alignItems: "center",
          backgroundColor: "blue",
        }}
      >
      {/* 햄버거 or 닫기 */} 
      {isMobile ? (
        <IconButton
          sx={{
            position: "absolute",
            top: '1rem',
            left: '1rem',
            width: "2rem",
            height: "2rem",
            zIndex: 20,
            color: "black",
          }}
          onClick={handleClick}
        >
          {isOpenMobileMenu ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      ) : null}
      </Box>
      
      {/* 모바일 메뉴 */}
      {isMobile && isOpenMobileMenu ? (
        <Container
          sx={{
            position: "absolute",
            top: `4rem`,
            left: 0,
            width: "100%",
            height: "auto", //높이 어떻게..?
            display: "flex",
            alignItems: "center",
            backgroundColor: "white",
            zIndex: 10
          }}
        >
          <List sx={{ width: "100%" }}>
            <List sx={{ display: "flex", flexDirection: "column" }}>
              {["대시보드", "광고관리"].map((text, index) => (
                <ListItem key={index}>
                  <Button
                    sx={{
                      border: "1px solid black",
                      height: "3rem",
                      width: "100%",
                    }}
                  >
                    {text}
                  </Button>
                </ListItem>
              ))}
            </List>
          </List>
        </Container>
      ) : null}
      
      {children}

    </Box>
  );
};

export default Home;
