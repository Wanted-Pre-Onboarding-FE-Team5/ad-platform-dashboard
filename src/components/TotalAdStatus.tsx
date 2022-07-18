import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import { Item } from "../styles/Item";
import { useTotalAdStatusModel } from "../models/useTotalAdStatusModel";
import { useRecoilState } from "recoil";
import { totalAdStatusState } from "../store/atom";
import { TotalAdStatusType } from "../types/totalAdStatusType";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend } from "recharts";
import { calcWeeklySum, useWeeklyStatusCallback } from "../models/useWeeklyStatusModel";

//any, dependency 처리
//차트 브라우저 width에 따라 변하게 해야함
const TotalAdStatus = () => {
  const [totalAdStatus, setTotalAdStatus] =
    useRecoilState<TotalAdStatusType[]>(totalAdStatusState);
    const [weeklyData, setWeeklyData] = React.useState<string[]>([]);

  //일주일치 데이터 하드 코딩 2022-02-01 ~ 2022-02-07
  // "?date_gte=2022-02-01&date_lte=2022-02-07"
  const { getTotalAdStatus } = useTotalAdStatusModel();
  React.useEffect(() => {
    getTotalAdStatus("?date_gte=2022-02-01&date_lte=2022-02-07")
      .then((data) => {
        setTotalAdStatus(data);
      })
      .catch((error) => console.log("data fetching error! detail:", error));
  }, []);

  React.useEffect(()=>{
    setWeeklyData(calcWeeklySum(totalAdStatus, useWeeklyStatusCallback));
  },[totalAdStatus]);
  
  console.log(weeklyData);

  return (
    <Box sx={{ p: 3 }}>
      <Typography sx={{ mb: 3, fontWeight: "bold" }}>통합 광고 현황</Typography>
      <Container
        sx={{
          bgcolor: "white",
          borderRadius: "20px",
        }}
      >
        <Container sx={{ display: "flex", justifyContent: "center", p: 4 }}>
          <Grid
            container
            spacing={2}
            sx={{
              width: "100%",
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
            }}
          >
            {weeklyData?.map((data : string)=>{
              return(
              <Grid item xs={12} md={4}>
                <Item>{data}</Item>
              </Grid>);
              }
            )}
          </Grid>
        </Container>

        <Container sx={{ display: "flex", justifyContent: "center", p: 2 }}>
          <LineChart
            width={900}
            height={400}
            data={totalAdStatus}
            margin={{ top: 20, right: 20, bottom: 40, left: 10 }}
          >
            <Legend layout="vertical" align="left" verticalAlign="top" />
            <CartesianGrid stroke="#ccc" horizontal={true} vertical={false} />
            <XAxis
              // dataKey={"name"}
              dataKey={"date"}
              axisLine={false}
              tickLine={false}
              tickMargin={20}
              padding={{ left: 120, right: 100 }}
            />
            <YAxis axisLine={false} tickLine={false} tickMargin={10} />
            <Line type="monotone" dataKey="roas" stroke="blue" />
            <Line type="monotone" dataKey="click" stroke="green" />
          </LineChart>
        </Container>
      </Container>
    </Box>
  );
};

export default TotalAdStatus;
