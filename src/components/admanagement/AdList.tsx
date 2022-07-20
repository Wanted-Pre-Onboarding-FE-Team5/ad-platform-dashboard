import React from "react";
import AdItem from "./AdItem";
import styled from "@emotion/styled";
import { useRecoilState } from "recoil";
import { adListState } from "../../store/atom";
import { AdListDataType } from "../../models/types";
import { useAdListModel } from "../../models/useAdListModel";

export interface IProps {
  props: { id: number; budget: number };
}

const AdList = () => {
  const [adList, setAdList] = useRecoilState<AdListDataType[]>(adListState);
  const { getAdList } = useAdListModel();

  // const query : string = "?status=active&status=closed";
  // React.useEffect(() => { //(url : string = query)
  //   getAdList().then((data)=>setAdList(data))
  //   .catch(() => console.log("data dispatch error"));
  // }, []);
  
  return (
    <AdListContainer>
      {adList?.map((aditem: AdListDataType) => (
        <AdItem key={aditem.id} aditem={aditem} />
      ))}
    </AdListContainer>
  );
};

export default AdList;

const AdListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
