import styled from "@emotion/styled";
import React from "react";
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
import { useAdListModel } from "../../models/useAdListModel";
import { AdListDataType } from "../../models/types";

type AdItemProps = {
  aditem: AdListDataType;
};

const AdItem = ({ aditem }: AdItemProps) => {
  const { deleteAdList, putAdItemById } = useAdListModel();

  const handleModifyClick = (
    params: number,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    putAdItemById(params, {
      id: params,
      adType: "web",
      title: "수정테스트",
      budget: 7773,
      status: "active",
      startDate: "2022-07-20 T00:00:00",
      endDate: null,
      cost: 267144117,
      convValue: 1157942685,
      roas: 433,
    });
  };

  const handleDeleteClick = (
    params: number,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    deleteAdList(params);
  };
  //put test
  // const test = () => {
  //   putAdItemById(1, {
  //     id: 1,
  //     adType: "web",
  //     title: "광고 7810",
  //     budget: 7810,
  //     status: "active",
  //     startDate: "2020-10-19T00:00:00",
  //     endDate: null,
  //     cost: 267144117,
  //     convValue: 1157942685,
  //     roas: 433,
  //   });
  // };

  return (
    <AditemBox
      key={aditem.id}
      variant="outlined"
      style={{ borderRadius: "12px" }}
    >
      <CardHeader title={aditem.title} sx={{ pb: 0 }} />
      <CardContent>
        <TableContainer>
          <Table size="small">
            <TableBody>
              <Row style={{ borderTop: "1px solid rgba(224, 224, 224, 1)" }}>
                <TableCell>상태</TableCell>
                <TableCell>
                  {/* {dailyAd.status === "active" ? "진행중" : "종료"} */}
                  {aditem.status === "active" ? "진행중" : "종료"}{" "}
                </TableCell>
              </Row>
              <Row style={{ borderTop: "1px solid rgba(224, 224, 224, 1)" }}>
                <TableCell>광고 생성일</TableCell>

                <TableCell>{aditem.startDate}</TableCell>
              </Row>
              <Row style={{ borderTop: "1px solid rgba(224, 224, 224, 1)" }}>
                <TableCell>일 희망 예산</TableCell>
                <TableCell>{aditem.budget / 10000}만원</TableCell>
              </Row>
              <Row style={{ borderTop: "1px solid rgba(224, 224, 224, 1)" }}>
                <TableCell>광고 수익률</TableCell>
                <TableCell>{aditem.roas}%</TableCell>
              </Row>
              <Row style={{ borderTop: "1px solid rgba(224, 224, 224, 1)" }}>
                <TableCell>매출</TableCell>
                <TableCell>
                  {Math.floor(aditem.convValue / 10000).toLocaleString()}
                  만원
                </TableCell>
              </Row>
              <Row style={{ borderTop: "1px solid rgba(224, 224, 224, 1)" }}>
                <TableCell>광고 비용</TableCell>
                <TableCell>
                  {Math.floor(aditem.cost / 10000).toLocaleString()}
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
          onClick={(e) => {
            handleModifyClick(aditem.id, e);
          }}
        >
          수정하기
        </Button>
        <Button
          size="small"
          variant="outlined"
          color="warning"
          onClick={(e) => {
            handleDeleteClick(aditem.id, e);
          }}
        >
          삭제하기
        </Button>
      </ButtonContainer>
    </AditemBox>
  );
};

export default AdItem;

const AditemBox = styled(DefaultCard)`
  margin: 10px 10px;
  width: 260px;
  box-sizing: border-box;

  &:hover {
    border: 1px solid #2a76d2;
    cursor: pointer;
  }
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
