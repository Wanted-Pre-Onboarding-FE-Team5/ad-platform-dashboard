import React from "react";
import { CssBaseline } from "@mui/material";
import { AppBar } from "@mui/material";
import { Box } from "@mui/material";
import { Container } from "@mui/material";
import { Toolbar } from "@mui/material";
import { useTotalAdStatusModel } from "../src/models/useTotalAdStatusModel";
import useMediaQuery from "@mui/material/useMediaQuery";
import Menu from "./components/Menu";
import HamburgerMenu from "./components/HamburgerMenu";

const menuWidth = 240;

type TotalReportDataType = {
  //total-report 데이터 타입
  imp: number;
  click: number;
  cost: number;
  conv: number;
  convValue: number;
  ctr: number;
  cvr: number;
  cpc: number;
  cpa: number;
  roas: number;
  date: string;
};

const App = () => {
  const mobile: boolean = useMediaQuery("(max-width:480px)");
  const showMenu: string = mobile === true ? "none" : "block";
  const { totalAdStatus, getTotalAdStatus } = useTotalAdStatusModel();

  React.useEffect(() => {
    getTotalAdStatus();
  }, []);

  //console.log(totalAdStatus === null ? [] : totalAdStatus["daily"]);

  const dailyAdStatusList: TotalReportDataType[] = Object.values(
    totalAdStatus === null ? [] : totalAdStatus["daily"]
  );

  // for (const value of dailyAdStatusList) {
  //   console.log(value);
  // }

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/* header 들어갈 자리 - 본문이랑 겹치는거 해결 필요*/}
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${mobile ? 0 : menuWidth}px)`,
          height: `4rem`,
          ml: `${mobile ? 0 : menuWidth}px`,
        }}
      >
        <Toolbar>{mobile ? <HamburgerMenu /> : null}</Toolbar>
      </AppBar>

      {/* 메뉴 들어갈 자리 */}
      <Menu menuWidth={menuWidth} showMenu={showMenu} />
    
      <Box component="main" sx={{ flexGrow: 1, bgcolor: "#f5f5f5", p: 3 }}>
        <Toolbar>대시 보드</Toolbar>

        {/* 각자 맡은 컴포넌트 들어갈 자리 */}
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
};

export default App;
