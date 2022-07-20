import React from "react";
import { totalAdStatusState, adListState } from "../store/atom";
import { TotalAdStatusType, AdListDataType } from "../models/types";
import { useRecoilValue } from "recoil";
import { addDays, format } from "date-fns";
import { getTotalAdStatusData, dataService } from "../api/api";

export type DefaultDateType = { [key: string]: string };
export type RangeDateType = { [key: string]: [string, string] };

const useDropdownItem = () => {
  //const totalAdStatus = useRecoilValue<TotalAdStatusType[]>(totalAdStatusState);
  //const [adList, setAdList] = useRecoilState<AdListDataType[]>(adListState);

  const getRangeData = () => {
    const defaultDate: DefaultDateType = {
      startDate: "",
      endDate: "",
    };
    //db의 가장 처음 date와 가장 나중 date를 추출하는 작업 -> 실패해서 하드 코딩
    const dateData = [{date:"2022-02-01"}, {date:"2022-04-20"}]
      .map((data: DefaultDateType) => {
        return data.date;
      })
      .sort();
    defaultDate.startDate = dateData[0];
    defaultDate.endDate = dateData[dateData.length - 1];

    const lastDate: Date = new Date(defaultDate.endDate);
    let startDate: Date = new Date(defaultDate.startDate);

    const rangeData: RangeDateType[] = [];
    while (startDate <= lastDate) {
      const range: RangeDateType = {
        start: ["", ""],
        end: ["", ""],
      };
      const endDate: Date = new Date(addDays(startDate, 6));
      range.start[0] = startDate.toString();
      range.start[1] = format(startDate, "M월 d일");
      range.end[0] = endDate.toString();
      range.end[1] = format(endDate, "M월 d일");
      rangeData.push(range);

      startDate = addDays(startDate, 7);
    }

    return rangeData;
  };
  
  const getProgressState = () => ({
    all: "전체 광고",
    active: "진행 중",
    closed: "진행 종료",
  });

  return { getRangeData, getProgressState };
};

export default useDropdownItem;
