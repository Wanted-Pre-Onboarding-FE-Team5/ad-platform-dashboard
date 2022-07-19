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

const AdCreateItem = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { postAdItemById } = useAdListModel();
  const handleSubmitBtn = () => {
    console.log("저장하기");
    // postAdItemById(10,);
  };
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
            <Test method="get">
              <AditemBox
                key={1}
                variant="outlined"
                style={{ borderRadius: "12px" }}
              >
                <CardHeader
                  title={<input placeholder="제목" name="title" />}
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
                            <input placeholder="상태" name="status" />
                          </TableCell>
                        </Row>
                        <Row>
                          <TableCell>광고 생성일</TableCell>
                          <TableCell>
                            <input placeholder="광고 생성일" name="startDate" />
                          </TableCell>
                        </Row>
                        <Row>
                          <TableCell>일 희망 예산</TableCell>
                          <TableCell>
                            <input placeholder="일 희망 예산" name="budget" />
                          </TableCell>
                        </Row>
                        <Row>
                          <TableCell>광고 수익률</TableCell>
                          <TableCell>
                            <input placeholder="광고 수익률" name="roas" />
                          </TableCell>
                        </Row>
                        <Row>
                          <TableCell>매출</TableCell>
                          <TableCell>
                            <input placeholder="매출" name="cost" />
                          </TableCell>
                        </Row>
                        <Row>
                          <TableCell>광고 비용</TableCell>
                          <TableCell>
                            <input placeholder="광고 비용" name="convValue" />
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
                    onClick={handleSubmitBtn}
                    type="submit"
                  >
                    저장하기
                  </Button>
                </ButtonContainer>
              </AditemBox>
            </Test>
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default AdCreateItem;

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

const Test = styled.form``;

const AditemBox = styled(DefaultCard)`
  margin: 10px 10px;

  box-sizing: border-box;

  &:hover {
    border: 1px solid #2a76d2;
    cursor: pointer;
  }
`;
