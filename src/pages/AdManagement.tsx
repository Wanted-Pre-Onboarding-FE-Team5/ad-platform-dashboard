import React from "react";
import { Box, Toolbar, Container } from "@mui/material";
import AdList from "../components/admanagement/AdList";
import AdCreateItem from "../components/admanagement/AdCreateItem";
import { AdListDataType } from "../models/types";
import { useRecoilState } from "recoil";
import { adListState } from "../store/atom";
import Dropdown from "../layouts/Dropdown";

const AdManagement = () => {
  const [adList, setAdList] = useRecoilState<AdListDataType[]>(adListState);
  let createId = adList.length + 1;

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        bgcolor: "#f5f5f5",
        mt: "4rem",
        width: `calc(100vw - 240px)`,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "1.5rem",
          fontWeight: "bold",
        }}
      >
        광고관리
      </Toolbar>

      <Box sx={{ pl: 3, pr:3 }}>
        <Container
          sx={{
            bgcolor: "white",
            borderRadius: "20px",
          }}
        >
          <Container sx={{ display:"flex", justifyContent:"space-between", p:2}}>
          <Dropdown />{" "}
          <AdCreateItem
            createId={createId}
            onSubmit={function (form: AdListDataType): void {
              console.log(form);
            }}
          />
          </Container>

          <AdList />

        </Container>
      </Box>
    </Box>
  );
};

export default AdManagement;
