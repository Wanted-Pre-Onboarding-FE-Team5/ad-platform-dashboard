import React from "react";
import { useRecoilState } from "recoil";
import { adListRequest } from "../axiosFactory/adListAxios";
import { AdListDataType } from "../models/types";
import { adListState } from "../store/atom";

const AdCard = (dailyAd: AdListDataType) => {
  // const { putAdItemById } = useAdListModl();
  // const test = () => {
  //   putAdItemById(1, {
  //     id: 1,
  //     adType: "web",
  //     title: "광고 7777",
  //     budget: 7777,
  //     status: "active",
  //     startDate: "2020-10-19T00:00:00",
  //     endDate: null,
  //     report: {
  //       cost: 267144117,
  //       convValue: 1157942685,
  //       roas: 433,
  //     },
  //   });
  // };

  return (
    <ul data-id={dailyAd.id}>
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
  );
};

export default function AdItem() {
  const [adList, setAdList] = useRecoilState(adListState);

  React.useEffect(() => {
    // getAdList();
    adListRequest.get("").then((response) => {
      setAdList(response.data);
    });
  }, []);

  console.log(adList);

  const dailyAdList: JSX.Element[] = (adList === null ? [] : adList)?.map(
    (dailyAd: AdListDataType) => <AdCard {...dailyAd} key={dailyAd.id} />
  );

  return <div>{dailyAdList} </div>;
}
