import React from "react";
import { useRecoilState } from "recoil";
import { adListRequest } from "../axiosFactory/adListAxios";
import { AdListDataType } from "../models/types";
import { adListState } from "../store/atom";

export default function AdItem() {
  const [adList, setAdList] = useRecoilState<AdListDataType[]>(adListState);

  React.useEffect(() => {
    // getAdList();
    adListRequest.get("").then((response) => {
      setAdList(response.data);
    });
  }, []);

  return (
    <div>
      {adList?.map((dailyAd: AdListDataType) => (
        <ul key={dailyAd.id}>
          <li>id: {dailyAd.id}</li>
          <li>adType: {dailyAd.adType}</li>
          <li>title: {dailyAd.title}</li>
          <li>budget: {dailyAd.budget}</li>
          <li>status: {dailyAd.status}</li>
          <li>startDate: {dailyAd.startDate}</li>
          <li>endDate: {dailyAd.endDate}</li>
          <li>cost: {dailyAd.report.cost}</li>
          <li>convValue: {dailyAd.report.convValue}</li>
          <li>roas: {dailyAd.report.roas}</li>
        </ul>
      ))}
    </div>
  );
}
