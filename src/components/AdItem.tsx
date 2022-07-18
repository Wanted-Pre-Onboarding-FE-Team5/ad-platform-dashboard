import React from "react";
import { useRecoilState } from "recoil";
import { adListRequest } from "../axiosFactory/adListAxios";
import { AdListDataType } from "../models/types";
import { adListState } from "../store/atom";
import styled from "@emotion/styled";

import {
  Button,
  Card as DefaultCard,
  CardActions,
  CardContent,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import { useAdListModel } from "../models/useAdListModel";

export default function AdItem() {
  const [adList, setAdList] = useRecoilState<AdListDataType[]>(adListState);
  const { deleteAdList, putAdItemById } = useAdListModel();
  React.useEffect(() => {
    // getAdList();
    adListRequest.get_ad("").then((response) => {
      setAdList(response.data);
    });
  }, []);

  const handleModifyClick = () => {
    console.log("수정클릭");
    test();
  };

  const handleDeleteClick = (
    params: number,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    console.log("삭제클릭");
    console.log(params);
    deleteAdList(params);
  };

  //put test
  const test = () => {
    putAdItemById(1, {
      id: 1,
      adType: "web",
      title: "광고 7810",
      budget: 7810,
      status: "active",
      startDate: "2020-10-19T00:00:00",
      endDate: null,
      report: {
        cost: 267144117,
        convValue: 1157942685,
        roas: 433,
      },
    });
  };
  //

  return (
    <AdItemContainer>
      {adList?.map((dailyAd: AdListDataType) => (
        <AditemBox
          key={dailyAd.id}
          variant="outlined"
          style={{ borderRadius: "12px" }}
        >
          <CardHeader title={dailyAd.title} sx={{ pb: 0 }} />
          <CardContent>
            <TableContainer>
              <Table size="small">
                <TableBody>
                  <Row
                    style={{ borderTop: "1px solid rgba(224, 224, 224, 1)" }}
                  >
                    <TableCell>상태</TableCell>
                    <TableCell>
                      {dailyAd.status === "active" ? "진행중" : "종료"}
                    </TableCell>
                  </Row>
                  <Row>
                    <TableCell>광고 생성일</TableCell>
                    <TableCell>{dailyAd.startDate}</TableCell>
                  </Row>
                  <Row>
                    <TableCell>일 희망 예산</TableCell>
                    <TableCell>{dailyAd.budget / 10000}만원</TableCell>
                  </Row>
                  <Row>
                    <TableCell>광고 수익률</TableCell>
                    <TableCell>{dailyAd.report.roas}%</TableCell>
                  </Row>
                  <Row>
                    <TableCell>매출</TableCell>
                    <TableCell>
                      {Math.floor(
                        dailyAd.report.convValue / 10000
                      ).toLocaleString()}
                      만원
                    </TableCell>
                  </Row>
                  <Row>
                    <TableCell>광고 비용</TableCell>
                    <TableCell>
                      {Math.floor(dailyAd.report.cost / 10000).toLocaleString()}
                      만원
                    </TableCell>
                  </Row>
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>

          <ButtonContainer sx={{ p: 0, pb: 2 }}>
            <Button
              size="small"
              variant="outlined"
              color="inherit"
              onClick={handleModifyClick}
            >
              수정하기
            </Button>
            <Button
              size="small"
              variant="outlined"
              color="warning"
              onClick={(e) => {
                handleDeleteClick(dailyAd.id, e);
              }}
            >
              삭제하기
            </Button>
          </ButtonContainer>
        </AditemBox>
      ))}
    </AdItemContainer>
  );
}

const AdItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const AditemBox = styled(DefaultCard)`
  margin: 10px 10px;

  box-sizing: border-box;

  &:hover {
    border: 1px solid #2a76d2;
    cursor: pointer;
  }
  /* TODO: 모바일 사이즈 해야함 */
`;

const Row = styled(TableRow)`
  & > td:first-of-type {
    padding-left: 0;
    color: gray;
  }

  & > td {
    padding: 0.5rem;
  }
`;

const ButtonContainer = styled(CardActions)`
  justify-content: space-around;
  & > button {
    color: black;
    border: 1px solid rgba(224, 224, 224, 1);
  }
`;
