import { Drawer } from "@mui/material";
import { Toolbar } from "@mui/material";
import { List } from "@mui/material";
import { Divider } from "@mui/material";
import { ListItem } from "@mui/material";
import { Button } from "@mui/material";
// import { Typography } from "@mui/material";

type MenuPropsType = {
  menuWidth: number;
  showMenu: string;
};

const Menu = (props: MenuPropsType) => {
  const { menuWidth, showMenu } = props;
  return (
    <Drawer
      sx={{
        display: showMenu,
        width: menuWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: menuWidth,
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
        <ListItem sx={{ fontSize: "12px" }}>서비스</ListItem>
        <ListItem>
          <Button
            sx={{ border: "1px solid black", width: "100%", height: "3rem" }}
          >
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
    </Drawer>
  );
};

export default Menu;
