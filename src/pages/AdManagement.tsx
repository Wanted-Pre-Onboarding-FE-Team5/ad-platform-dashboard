import React from "react";
import { Box, Toolbar, Container, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import AdList from "../components/AdList";
import AdCreateItem from "../components/AdCreateItem";

const AdManagement = () => {
  return (
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "#f5f5f5",
          mt: "4rem",
          width: `calc(100vw - 240px)`,
          // height: 100,
        }}
      >
        <Typography sx={{ mt: 2, mb: 2, ml: 2, fontWeight: "bold" }}>
          통합 광고 현황
        </Typography>
        <Container
          sx={{
            bgcolor: "white",
            borderRadius: "20px",
          }}
        >
          <BtnBox>
            <Button variant="outlined">전체 광고</Button>{" "}
            {/* TODO: 전체 광고 버튼 셀렉트박스로 변경 예정 */}
            <AdCreateItem />
          </BtnBox>
          <AdList />
        </Container>
      </Box>
  );
};

export default AdManagement;

const BtnBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 15px;
`;

