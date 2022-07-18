import React from 'react';
import { CssBaseline } from '@mui/material';
import { AppBar } from '@mui/material';
import { Box } from '@mui/material';
import { Container } from '@mui/material';
import { Toolbar } from '@mui/material';
import { useTotalAdStatusModel } from '../src/models/useTotalAdStatusModel';
import useMediaQuery from '@mui/material/useMediaQuery';
import Menu from './components/Menu';
import HamburgerMenu from './components/HamburgerMenu';
import ChannelStatus from './components/ChannelStatus';
import Header from './components/Header';

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
  const mobile: boolean = useMediaQuery('(max-width:480px)');
  const showMenu: string = mobile === true ? 'none' : 'block';
  const { totalAdStatus, getTotalAdStatus } = useTotalAdStatusModel();

  React.useEffect(() => {
    getTotalAdStatus();
  }, []);

  //console.log(totalAdStatus === null ? [] : totalAdStatus["daily"]);

  const dailyAdStatusList: TotalReportDataType[] = Object.values(totalAdStatus === null ? [] : totalAdStatus['daily']);

  // for (const value of dailyAdStatusList) {
  //   console.log(value);
  // }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Header />
      <Toolbar>{mobile ? <HamburgerMenu /> : null}</Toolbar>
      <Menu menuWidth={menuWidth} showMenu={showMenu} />

      <Box component='main' sx={{ flexGrow: 1, bgcolor: '#f5f5f5', p: 3 }}>
        <Toolbar>대시 보드</Toolbar>

        <Box sx={{ p: 3, height: '1000px' }}>
          <Container sx={{ p: 3, bgcolor: 'white', height: '60%', borderRadius: '30px' }}>통합 광고 현황</Container>
        </Box>
        <Box sx={{ p: 3, height: '1000px' }}>
          <Container sx={{ p: 3, bgcolor: 'white', height: '60%', borderRadius: '30px' }}>
            매체 현황
            <ChannelStatus></ChannelStatus>
          </Container>
        </Box>
      </Box>
    </Box>
  );
};

export default App;
