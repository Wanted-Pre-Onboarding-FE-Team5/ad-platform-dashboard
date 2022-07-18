import React from "react";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import AdList from "../components/AdList";

type Props = {};

const AdManagement = (props: Props) => {
  return (
    <AdmanagementContainer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "#f5f5f5", p: 3 }}
      ></Box>
      <BtnBox>
        <Button variant="outlined">전체 광고</Button>{" "}
        {/* TODO: 전체 광고 버튼 셀렉트박스로 변경 예정 */}
        <Button variant="contained">광고 만들기</Button>
      </BtnBox>
      <AdList />
    </AdmanagementContainer>
  );
};

export default AdManagement;

const AdmanagementContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  /* width: 100%; */
`;

const BtnBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
