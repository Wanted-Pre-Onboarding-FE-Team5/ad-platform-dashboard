import React from "react";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import { Item } from "../styles/Item";
import Container from "@mui/material/Container";

const LegendItem = () => {
  return (
    <Container sx={{ display: "flex", alignItems: "center", height: "4rem" }}>
      <Item sx={{ width: "8rem", display: "flex", alignItems: "center" }}>
        <Brightness1Icon sx={{ color: "blue", mr: "2rem", fontSize: 10 }} />
        roas
      </Item>
      <Item
        sx={{
          width: "8rem",
          ml: "1rem",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Brightness1Icon sx={{ color: "green", mr: "2rem", fontSize: 10 }} />
        click
      </Item>
    </Container>
  );
};

export default LegendItem;
