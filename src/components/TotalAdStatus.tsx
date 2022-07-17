import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import { useTotalAdStatusModel } from "../models/useTotalAdStatusModel";
import { useRecoilState } from "recoil";
import { totalAdStatusState } from "../store/atom";
import { TotalAdStatusType } from "../types/totalAdStatusType";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

//js 날짜관련 라이브러리 date-fns https://jsikim1.tistory.com/197

//any 처리 
//차트 브라우저 width에 따라 변하게 해야함
//과제 설명 본 후 멘토 질문하기 : 보여주는 데이터가 일주일간의 평균인지? 옆에 화살표는 어떤의미? 예시에 나와있는 단위대로 display해야되는지
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


  const data = [...totalAdStatus];

  //x축 값 이름 변경하는 함수 test -> 완성되면 models hook으로 돌리기
  // const xAxisName = (data : TotalAdStatusType[]) => {
  //   for (let adStatus of data) {
  //     const dataDate = new Date(adStatus.date);
  //     adStatus.name=`${dataDate.getMonth() + 1}월 ${dataDate.getDate()}일`;
  //   }
  // };
  // xAxisName(totalAdStatus);
  // console.log(data);

  return (
    <Box sx={{ p: 3 }}>
      <Typography sx={{ mb: 3, fontWeight: "bold" }}>통합 광고 현황</Typography>
      <Container
        sx={{
          bgcolor: "white",
          borderRadius: "20px",
        }}
      >
        <Grid
          container
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
            pt: 3,
            pb: 3,
          }}
        >
              <Grid item xs={12} md={4} 
                sx={{ border: "1px solid black", borderRadius: "10px", p:2 }}
              > 
                ROAS : {Math.round(Object(totalAdStatus[0]).roas)}%
              </Grid>
              <Grid item xs={12} md={4} 
                sx={{ border: "1px solid black", borderRadius: "10px", p:2 }}
              > 
                광고비 : {(Math.round(Object(totalAdStatus[0]).cost/1000)*1000)/10000}만 원
              </Grid>
              <Grid item xs={12} md={4} 
                sx={{ border: "1px solid black", borderRadius: "10px", p:2 }}
              > 
                노출수 : {(Math.round(Object(totalAdStatus[0]).imp/1000)*1000)/10000}만 회
              </Grid>
              <Grid item xs={12} md={4} 
                sx={{ border: "1px solid black", borderRadius: "10px", p:2 }}
              > 
                클릭수 : {Object(totalAdStatus[0]).click.toLocaleString('ko-KR')}회 //만단위로..?
              </Grid>
              <Grid item xs={12} md={4} 
                sx={{ border: "1px solid black", borderRadius: "10px", p:2 }}
              > 
                전환수 : {Object(totalAdStatus[0]).conv.toLocaleString('ko-KR')}회 
              </Grid>
              <Grid item xs={12} md={4} 
                sx={{ border: "1px solid black", borderRadius: "10px", p:2 }}
              > 
                매출 : {(Math.round(Object(totalAdStatus[0]).convValue/100000)*10000000)/100000000}억 원
              </Grid>
        </Grid>

        <Container sx={{ display: "flex", justifyContent: "center", p: 2 }}>
          <LineChart
            width={900} 
            height={400}
            data={data}
            margin={{ top: 20, right: 20, bottom: 40, left: 20 }}
          >
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
