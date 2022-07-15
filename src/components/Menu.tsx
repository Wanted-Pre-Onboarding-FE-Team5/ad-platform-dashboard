import { Box } from "@mui/material";
import { Drawer } from "@mui/material";
import { CssBaseline } from "@mui/material";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import { List } from "@mui/material";
import { Divider } from "@mui/material";
import { ListItem } from "@mui/material";
import { Container } from "@mui/material";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import HamburgerMenu from "./HamburgerMenu";

const drawerWidth = 240;

export default function Menu() {
  const matches: boolean = useMediaQuery("(max-width:480px)");

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/* header 들어갈 자리 */}
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
          {matches ? <HamburgerMenu /> : null}
          </Typography>
        </Toolbar>
      </AppBar>  
      <Divider />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <List>
          <ListItem>광고 플랫폼 대시보드</ListItem>
        </List>
        <Toolbar />
        <Divider />
        <List>
          <List>
            <ListItem sx={{ fontSize: "12px" }}>서비스</ListItem>
            <ListItem>
              <Button sx={{ border: "1px solid black", width: "100%" }}>
                뭔지모르는 버튼
              </Button>
            </ListItem>
          </List>
          <List>
            <ListItem sx={{ fontSize: "12px" }}>광고센터</ListItem>
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
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, bgcolor: "#f5f5f5", p: 3 }}>
        <Toolbar>Toolbar 컴포넌트 사용해서 text 쓰기</Toolbar>
        <Box sx={{ p: 3, height: "1000px" }}>
          <Container
            sx={{ p: 3, bgcolor: "white", height: "90%", borderRadius: "30px" }}
          >
            \//page 들어갈 자리 : height를 임의로 지정한 상태
          </Container>
        </Box>
        <Box sx={{ p: 3, height: "1000px" }}>
          <Container
            sx={{ p: 3, bgcolor: "white", height: "90%", borderRadius: "30px" }}
          >
            \//page 들어갈 자리 : height를 임의로 지정한 상태
          </Container>
        </Box>
      </Box>
    </Box>
  );
}