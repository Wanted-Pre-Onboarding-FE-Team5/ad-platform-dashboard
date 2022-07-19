import React from "react";
import { Box, Toolbar, Container } from "@mui/material";
import styled from "@emotion/styled";
import { useAdListModel } from "../models/useAdListModel";
import AdList from "../components/admanagement/AdList";
import AdCreateItem from "../components/admanagement/AdCreateItem";
import Dropdown from "../layouts/Dropdown";

const AdManagement = () => {
  const { putAdItemById } = useAdListModel();

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
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "1.5rem",
          fontWeight: "bold",
        }}
      >
        광고관리
      </Toolbar>

      <Box sx={{ pl: 3, pr:3 }}>
        <Container
          sx={{
            bgcolor: "white",
            borderRadius: "20px",
          }}
        >
          <Container sx={{ display:"flex", justifyContent:"space-between", p:2}}>
          <Dropdown />{" "}
          <AdCreateItem
            onSubmit={function (form: {
              id: number;
              adType: string;
              title: string;
            }): void {
              console.log(form);
            }}
          />
          </Container>
          {/* TODO: 전체 광고 버튼 셀렉트박스로 변경 예정 */}
          {/* <BtnBox>
          <Button variant="outlined">전체 광고</Button>{" "}
          <AdCreateItem
            onSubmit={function (form: {
              id: number;
              adType: string;
              title: string;
            }): void {
              console.log(form);
            }}
          />
        </BtnBox> */}
          <AdList />
        </Container>
      </Box>
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
