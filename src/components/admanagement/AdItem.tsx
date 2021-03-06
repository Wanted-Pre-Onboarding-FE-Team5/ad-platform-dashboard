import styled from "@emotion/styled";
import React from "react";
import { Box } from "@mui/system";
import { Input, Typography } from "@mui/material";
import Modal from "@mui/material/Modal";
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
const AdItem = ({ aditem }: AdItemProps) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [form, setForm] = React.useState({
    id: aditem.id,
    adType: aditem.adType,
    title: aditem.title,
    budget: aditem.budget,
    status: aditem.status,
    startDate: aditem.startDate,
    endDate: aditem.endDate,
    cost: aditem.cost,
    convValue: aditem.convValue,
    roas: aditem.roas,
  });
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

  const { deleteAdList, putAdItemById } = useAdListModel();

  const handleModifyClick = (
    params: number,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    putAdItemById(params, {
      id: params,
      adType: adType,
      title: title,
      budget: budget,
      status: status,
      startDate: startDate,
      endDate: null,
      cost: cost,
      convValue: convValue,
      roas: roas,
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
  //     title: "?????? 7810",
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
                <TableCell>??????</TableCell>
                <TableCell>
                  {/* {dailyAd.status === "active" ? "?????????" : "??????"} */}
                  {aditem.status === "active" ? "?????????" : "??????"}{" "}
                </TableCell>
              </Row>
              <Row style={{ borderTop: "1px solid rgba(224, 224, 224, 1)" }}>
                <TableCell>?????? ?????????</TableCell>

                <TableCell>{aditem.startDate}</TableCell>
              </Row>
              <Row style={{ borderTop: "1px solid rgba(224, 224, 224, 1)" }}>
                <TableCell>??? ?????? ??????</TableCell>
                <TableCell>{aditem.budget / 10000}??????</TableCell>
              </Row>
              <Row style={{ borderTop: "1px solid rgba(224, 224, 224, 1)" }}>
                <TableCell>?????? ?????????</TableCell>
                <TableCell>{aditem.roas}%</TableCell>
              </Row>
              <Row style={{ borderTop: "1px solid rgba(224, 224, 224, 1)" }}>
                <TableCell>??????</TableCell>
                <TableCell>
                  {Math.floor(aditem.convValue / 10000).toLocaleString()}
                  ??????
                </TableCell>
              </Row>
              <Row style={{ borderTop: "1px solid rgba(224, 224, 224, 1)" }}>
                <TableCell>?????? ??????</TableCell>
                <TableCell>
                  {Math.floor(aditem.cost / 10000).toLocaleString()}
                  ??????
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
          onClick={handleOpen}
          // onClick={(e) => {
          //   handleModifyClick(aditem.id, e);
          // }}
        >
          ????????????
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <ModifyBox>
                <CardHeader title={aditem.title} sx={{ pb: 0 }} />
                <CardContent>
                  <TableContainer>
                    <Table size="small">
                      <TableBody>
                        <Row
                          style={{
                            borderTop: "1px solid rgba(224, 224, 224, 1)",
                          }}
                        >
                          <TableCell>??????</TableCell>
                          <TableCell>
                            {/* {dailyAd.status === "active" ? "?????????" : "??????"} */}
                            <Input
                              defaultValue={
                                aditem.status === "active" ? "?????????" : "??????"
                              }
                              name="status"
                              value={status}
                              onChange={onChange}
                              required
                            />
                          </TableCell>
                        </Row>
                        <Row
                          style={{
                            borderTop: "1px solid rgba(224, 224, 224, 1)",
                          }}
                        >
                          <TableCell>?????? ?????????</TableCell>

                          <TableCell>
                            <Input
                              defaultValue={aditem.startDate}
                              name="startDate"
                              value={startDate}
                              onChange={onChange}
                              required
                            />
                          </TableCell>
                        </Row>
                        <Row
                          style={{
                            borderTop: "1px solid rgba(224, 224, 224, 1)",
                          }}
                        >
                          <TableCell>??? ?????? ??????</TableCell>
                          <TableCell>
                            <Input
                              defaultValue={`${aditem.budget / 10000}??????`}
                              name="budget"
                              value={budget}
                              onChange={onChange}
                              required
                            />
                          </TableCell>
                        </Row>
                        <Row
                          style={{
                            borderTop: "1px solid rgba(224, 224, 224, 1)",
                          }}
                        >
                          <TableCell>?????? ?????????</TableCell>
                          <TableCell>
                            <Input
                              defaultValue={`${aditem.roas}%`}
                              name="roas"
                              value={roas}
                              onChange={onChange}
                              required
                            />
                          </TableCell>
                        </Row>
                        <Row
                          style={{
                            borderTop: "1px solid rgba(224, 224, 224, 1)",
                          }}
                        >
                          <TableCell>??????</TableCell>
                          <TableCell>
                            <Input
                              defaultValue={`${Math.floor(
                                aditem.convValue / 10000
                              ).toLocaleString()}
                              ??????`}
                              name="convValue"
                              value={convValue}
                              onChange={onChange}
                              required
                            />
                          </TableCell>
                        </Row>
                        <Row
                          style={{
                            borderTop: "1px solid rgba(224, 224, 224, 1)",
                          }}
                        >
                          <TableCell>?????? ??????</TableCell>
                          <TableCell>
                            <Input
                              defaultValue={`${Math.floor(
                                aditem.cost / 10000
                              ).toLocaleString()}??????`}
                              name="cost"
                              value={cost}
                              onChange={onChange}
                              required
                            />
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
                    // onClick={handleOpen}
                    onClick={(e) => {
                      handleModifyClick(aditem.id, e);
                    }}
                  >
                    ????????????
                  </Button>
                </ButtonContainer>
              </ModifyBox>
            </Typography>
          </Box>
        </Modal>
        <Button
          size="small"
          variant="outlined"
          color="warning"
          onClick={(e) => {
            handleDeleteClick(aditem.id, e);
          }}
        >
          ????????????
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

const ModifyBox = styled(DefaultCard)`
  margin: 10px 10px;
  width: 260px;
  box-sizing: border-box;
  z-index: 1;
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
