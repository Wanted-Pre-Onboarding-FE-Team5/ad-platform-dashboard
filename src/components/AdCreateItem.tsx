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
import { useAdListModel } from "../models/useAdListModel";
import AdItem from "../components/AdItem";
import { stringify } from "querystring";

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

type MyFormProps = {
  onSubmit: (form: { id: number; adType: string; title: string }) => void;
};

const AdCreateItem = ({ onSubmit }: MyFormProps) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [form, setForm] = React.useState({
    id: 1,
    adType: "",
    title: "",
  });

  const { id, adType, title } = form;
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const { putAdItemById } = useAdListModel();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(form);
    setForm({
      id: 1,
      adType: "",
      title: "",
    }); // 초기화
    putAdItemById(1, {
      adType: adType,
      title: title,
      id: 0,
      budget: 0,
      status: "",
      startDate: "",
      endDate: null,
      report: {
        cost: 0,
        convValue: 0,
        roas: 0,
      },
    });
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
            {/* form */}
            <form onSubmit={handleSubmit}>
              {/* <input name="id" onChange={onChange} /> */}
              <input name="adType" value={adType} onChange={onChange} />
              <input name="title" value={title} onChange={onChange} />
              <button type="submit">등록</button>
            </form>
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
