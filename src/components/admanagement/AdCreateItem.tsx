import React from "react";
import { Typography } from "@mui/material";
import Modal from "@mui/material/Modal";
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
import { Box } from "@mui/system";
import { useAdListModel } from "../../models/useAdListModel";
import { AdListDataType } from "../../models/types";
import { useRecoilState } from "recoil";
import { adListState } from "../../store/atom";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  //   border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface MyFormProps {
  onSubmit: (form: AdListDataType) => void;
  createId: number;
}

const AdCreateItem = ({ onSubmit, createId }: MyFormProps) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [form, setForm] = React.useState({
    id: 0,
    adType: "",
    title: "",
    budget: 0,
    status: "",
    startDate: "",
    endDate: "",
    cost: 0,
    convValue: 0,
    roas: 0,
  });
  const { adList, postAdItemById } = useAdListModel();
  const {
    adType,
    title,
    budget,
    status,
    startDate,
    endDate,
    cost,
    convValue,
    roas,
  } = form;
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(form);
    setForm({
      id: 0,
      adType: "",
      title: "",
      budget: 0,
      status: "",
      startDate: "",
      endDate: "",
      cost: 0,
      convValue: 0,
      roas: 0,
    }); // 초기화
    postAdItemById({
      id: createId,
      adType: adType,
      title: title,
      budget: budget,
      status: status,
      startDate: startDate,
      endDate: endDate,
      cost: cost,
      convValue: convValue,
      roas: roas,
    });
  };
  console.log(createId);
  return (
    <>
      <Button onClick={handleOpen} variant="contained">
        광고 만들기
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <AditemBox variant="outlined" style={{ borderRadius: "12px" }}>
              <form onSubmit={handleSubmit}>
                <CardHeader
                  title={
                    <input
                      name="title"
                      value={title}
                      onChange={onChange}
                      placeholder="제목"
                    />
                  }
                  sx={{ pb: 0 }}
                />
                <CardContent>
                  <TableContainer>
                    <Table size="small">
                      <TableBody>
                        <Row
                          style={{
                            borderTop: "1px solid rgba(224, 224, 224, 1)",
                          }}
                        >
                          <TableCell>상태</TableCell>
                          <TableCell>
                            {/* {dailyAd.status === "active" ? "진행중" : "종료"} */}
                            <input
                              name="status"
                              value={status}
                              onChange={onChange}
                              placeholder="status"
                            />
                          </TableCell>
                        </Row>
                        <Row
                          style={{
                            borderTop: "1px solid rgba(224, 224, 224, 1)",
                          }}
                        >
                          <TableCell>광고 생성일</TableCell>

                          <TableCell>
                            {" "}
                            <input
                              name="startDate"
                              value={startDate}
                              onChange={onChange}
                              placeholder="startDate"
                            />
                          </TableCell>
                        </Row>
                        <Row
                          style={{
                            borderTop: "1px solid rgba(224, 224, 224, 1)",
                          }}
                        >
                          <TableCell>일 희망 예산</TableCell>
                          <TableCell>
                            {" "}
                            <input
                              name="budget"
                              value={budget}
                              onChange={onChange}
                              placeholder="budget"
                            />
                          </TableCell>
                        </Row>
                        <Row
                          style={{
                            borderTop: "1px solid rgba(224, 224, 224, 1)",
                          }}
                        >
                          <TableCell>광고 수익률</TableCell>
                          <TableCell>
                            <input
                              name="roas"
                              value={roas}
                              onChange={onChange}
                              placeholder="roas"
                            />
                            %
                          </TableCell>
                        </Row>
                        <Row
                          style={{
                            borderTop: "1px solid rgba(224, 224, 224, 1)",
                          }}
                        >
                          <TableCell>매출</TableCell>
                          <TableCell>
                            <input
                              name="convValue"
                              value={convValue}
                              onChange={onChange}
                              placeholder="convValue"
                            />
                          </TableCell>
                        </Row>
                        <Row
                          style={{
                            borderTop: "1px solid rgba(224, 224, 224, 1)",
                          }}
                        >
                          <TableCell>광고 비용</TableCell>
                          <TableCell>
                            <input
                              name="cost"
                              value={cost}
                              onChange={onChange}
                              placeholder="cost"
                            />{" "}
                          </TableCell>
                        </Row>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </CardContent>

                <button type="submit">등록</button>
              </form>
            </AditemBox>
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default AdCreateItem;

const AditemBox = styled(DefaultCard)`
  margin: 10px 10px;

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
