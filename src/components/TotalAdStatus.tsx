import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTotalAdStatusModel } from "../models/useTotalAdStatusModel";
import { useRecoilState } from "recoil";
import { totalAdStatusState } from "../store/atom";
import { TotalAdStatusType } from "../types/totalAdStatusType";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend } from "recharts";

//any, dependency 처리
//차트 브라우저 width에 따라 변하게 해야함
//Grid 반복문이랑 데이터 가공 줄이는 방법 생각하기 => grid 반복문 찾으면 라우터 메뉴 버튼도 같은 방식으로 적용하면됨!
const TotalAdStatus = () => {
  const [totalAdStatus, setTotalAdStatus] =
    useRecoilState<TotalAdStatusType[]>(totalAdStatusState);

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

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  // 데이터 가공 -> roas는 평균내고 나머지는 누적
  let roasSum = 0;
  totalAdStatus.forEach((item) => {
    roasSum += item.roas;
  });

  let costSum = 0;
  totalAdStatus.forEach((item) => {
    costSum += item.cost;
  });

  let impSum = 0;
  totalAdStatus.forEach((item) => {
    impSum += item.imp;
  });

  let clickSum = 0;
  totalAdStatus.forEach((item) => {
    clickSum += item.click;
  });

  let convSum = 0;
  totalAdStatus.forEach((item) => {
    convSum += item.conv;
  });

  let convValueSum = 0;
  totalAdStatus.forEach((item) => {
    convValueSum += item.convValue;
  });

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
            <Grid item xs={12} md={4}>
              <Item>ROAS : {Math.ceil(roasSum / 7)}%</Item>
            </Grid>
            <Grid item xs={12} md={4}>
              <Item>
                광고비 :{" "}
                {((Math.ceil(costSum / 10000) * 10000) / 10000).toLocaleString(
                  "ko-KR"
                )}
                만 원
              </Item>
            </Grid>
            <Grid item xs={12} md={4}>
              <Item>
                노출수 :{" "}
                {((Math.ceil(impSum / 10000) * 10000) / 10000).toLocaleString(
                  "ko-KR"
                )}
                만 회
              </Item>
            </Grid>
            <Grid item xs={12} md={4}>
              <Item>
                클릭수 :
                {((Math.ceil(clickSum / 1000) * 1000) / 10000).toLocaleString("ko-KR")}
                만 회
              </Item>
            </Grid>
            <Grid item xs={12} md={4}>
              <Item>전환수 : {convSum.toLocaleString("ko-KR")}회</Item>
            </Grid>
            <Grid item xs={12} md={4}>
              <Item>
                매출 : 
                {(Math.ceil(convValueSum / 10000000) * 10000000) / 100000000}
                억 원
              </Item>
            </Grid>
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
