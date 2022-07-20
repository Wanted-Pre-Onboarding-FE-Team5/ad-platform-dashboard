import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import { Item } from "../../../styles/Item";
import { useRecoilState } from "recoil";
import { totalAdStatusState } from "../../../store/atom";
import { TotalAdStatusType } from "../../../models/types";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import { calculateSum, calculateSumCallback } from "../../../models/useFormatModel";
import { dataService, getTotalAdStatusData } from "../../../api/api";
import LegendItem from "./LegendItem";

const TotalAdStatus = () => {
  const [totalAdStatus, setTotalAdStatus] =
    useRecoilState<TotalAdStatusType[]>(totalAdStatusState);
  const [weeklyData, setWeeklyData] = React.useState<string[]>([]);

  const url = "?date_gte=2022-02-01&date_lte=2022-02-07";
  React.useEffect(() => {
    getTotalAdStatusData(dataService("totalAdStatus"),"?date_gte=2022-02-01&date_lte=2022-02-07")
      .then((data) => setTotalAdStatus(data))
      .catch(() => console.log("data dispatch error"));
  }, [setTotalAdStatus]);
  
  React.useEffect(
    () => setWeeklyData(calculateSum(totalAdStatus, calculateSumCallback)),
    [totalAdStatus]
  );

  return (
    <Box sx={{ p: 3 }}>
      <Typography sx={{ mb: 3, fontWeight: 'bold' }}>통합 광고 현황</Typography>
      <Container
        sx={{
          bgcolor: 'white',
          borderRadius: '20px',
        }}
      >
        <Container sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
          <Grid
            container
            spacing={2}
            sx={{
              width: '100%',
              flexGrow: 1,
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            {weeklyData?.map((data: string, index: number) => {
              return (
                <Grid key={index} item xs={12} md={4}>
                  <Item>{data}</Item>
                </Grid>
              );
            })}
          </Grid>
        </Container>
        <LegendItem />
        <ResponsiveContainer width="100%" aspect={2}>
          <LineChart
            data={totalAdStatus}
            margin={{ top: 40, right: 20, bottom: 40, left: 10 }}
          >
            <CartesianGrid stroke="#ccc" horizontal={true} vertical={false} />
            <XAxis
              dataKey={"date"}
              axisLine={false}
              tickLine={false}
              tickMargin={20}
              padding={{ left: 120, right: 100 }}
            />
            <YAxis axisLine={false} tickLine={false} tickMargin={10} />
            <Line type='monotone' dataKey='roas' stroke='blue' />
            <Line type='monotone' dataKey='click' stroke='green' />
          </LineChart>
        </ResponsiveContainer>
      </Container>
    </Box>
  );
};

export default TotalAdStatus;
