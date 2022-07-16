import React from 'react';
import { useTotalAdStatusModel } from "../models/useTotalAdStatusModel"
import { Box, Container } from "@mui/material";

//date-fns https://jsikim1.tistory.com/197

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

const TotalAdStatus = () => {
  const { totalAdStatus, getTotalAdStatus } = useTotalAdStatusModel();

  React.useEffect(() => {
    getTotalAdStatus();
  }, []);

  console.log(totalAdStatus === null ? [] : totalAdStatus["daily"]);

  const dailyAdStatusList: TotalReportDataType[] = Object.values(
    totalAdStatus === null ? [] : totalAdStatus["daily"]
  );

  for (const value of dailyAdStatusList) {
    console.log(value);
  }

  return(
    <Box sx={{ p: 3 }}>
        <Container
          sx={{
            p: 3,
            bgcolor: "white",
            borderRadius: "30px",
          }}
        ></Container>
      </Box>
  );
};

export default TotalAdStatus;
