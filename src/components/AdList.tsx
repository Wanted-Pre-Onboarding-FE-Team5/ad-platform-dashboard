import React from "react";
import AdItem from "./AdItem";
import styled from "@emotion/styled";

const AdList = () => {
  return (
    <AdListContainer>
        <AdItem />
    </AdListContainer>
  );
};

export default AdList;

const AdListContainer = styled.div``;
