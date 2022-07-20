import { Drawer } from "@mui/material";
import { Toolbar } from "@mui/material";
import { List } from "@mui/material";
import { Divider } from "@mui/material";
import { ListItem } from "@mui/material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export enum sideMenuWidth {
  width = 240
}

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <Drawer
      sx={{
        width: sideMenuWidth.width,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: sideMenuWidth.width,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <Toolbar />
      <Divider />
      <List>
        <ListItem sx={{ fontSize: "12px" }}>서비스</ListItem>
        <ListItem>
          <Button
            sx={{ border: "1px solid #eeeee", width: "100%", height: "3rem" }}
            disabled
          >
            서비스
          </Button>
        </ListItem>
      </List>
      <Toolbar />
      <List>
        <ListItem sx={{ fontSize: "12px" }}>광고센터</ListItem>
        <List sx={{ width:"100%" }}>
            <ListItem sx={{ display: "flex", flexDirection: "column" }}>
                <Button
                  sx={{
                    border: "1px solid #eeeeee",
                    height: "3rem",
                    width: "100%",
                  }}
                  onClick={()=>navigate("/")}
                >
                  대시보드
                </Button>
                <Button
                  sx={{
                    border: "1px solid #eeeeee",
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
      </List>
      <Divider />
    </Drawer>
  );
};

export default Sidebar;