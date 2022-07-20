import React from "react";
import { totalAdStatusState, adListState } from "../store/atom";
import { TotalAdStatusType, AdListDataType } from "../models/types";
import { useRecoilValue } from "recoil";
import { addDays, format } from "date-fns";

export type DefaultDateType = { [key: string]: string };
export type RangeDateType = { [key: string]: [string, string] };

// type EndDateType = string | null;
// type EndDateAndIdType = {
//   id: number;
//   endDate: EndDateType;
// };

const useDropdownItem = () => {
  const totalAdStatus = useRecoilValue<TotalAdStatusType[]>(totalAdStatusState);
  
  //const [adList, setAdList] = useRecoilState<AdListDataType[]>(adListState);

  const getRangeData = () => {
    const defaultDate: DefaultDateType = {
      startDate: "",
      endDate: "",
    };
    const dateData = totalAdStatus
      .map((data: TotalAdStatusType) => {
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
  //endDate 이랑 id 가져오기 => endDate 입력시 자동 closed
  //   const endDateAndId = adList.map((adListData: AdListDataType) => {
  //     const template: EndDateAndIdType = {
  //       id: -1,
  //       endDate: "",
  //     };
  //     template.id = adListData.id;
  //     template.endDate = adListData.endDate;
  //     return template;
  //   });

  //   endDateAndId.map((item: EndDateAndIdType) =>
  //     item.endDate === null
  //       ? null
  //       : console.log(
  //           `patch써서 status상태를 closed로 바꿔주는 함수를 넣어주면됩니다. id는 item.id`
  //         )
  //   );

  const getProgressState = () => ({
    all: "전체 광고",
    active: "진행 중",
    closed: "진행 종료",
  });

  return { getRangeData, getProgressState };
};

export default useDropdownItem;
