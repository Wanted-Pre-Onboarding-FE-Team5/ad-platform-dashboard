import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box, CssBaseline, List, ListItem, Button, Container } from '@mui/material';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const menuWidth = 240; //-> type? enum?

//Box의 width -> min-? max-?
//isOpenMobileMenu가 true인 상태에서 480px 이상 커지면 초기화하기
//header 부분 z-index 수정. 자꾸 다른 컴포넌트 밑으로 들어감
const DefaultLayout = () => {
  const isMobile: boolean = useMediaQuery('(max-width:480px)');
  const [isOpenMobileMenu, setIsOpenMobileMenu] = React.useState<boolean>(false);

  const handleClick = (): void => {
    setIsOpenMobileMenu(!isOpenMobileMenu);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {isMobile ? null : <Sidebar menuWidth={menuWidth} />}

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
            height: 'auto', //높이 어떻게..?
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'white',
            zIndex: 10,
          }}
        >
          <List sx={{ width: '100%' }}>
            <ListItem sx={{ display: 'flex', flexDirection: 'column' }}>
              <Link to='/'>
                <Button
                  sx={{
                    border: '1px solid black',
                    height: '3rem',
                    width: '100%',
                  }}
                >
                  대시보드
                </Button>
              </Link>
              <Link to='/ad'>
                <Button
                  sx={{
                    border: '1px solid black',
                    height: '3rem',
                    width: '100%',
                  }}
                >
                  광고관리
                </Button>
              </Link>
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
