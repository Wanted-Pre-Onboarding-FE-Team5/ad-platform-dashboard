import { atom, selector } from "recoil";
import { TotalAdStatusType } from "../models/types";
import { addDays, format } from "date-fns";
import { v1 } from "uuid";
import { totalAdStatusState } from "./atom";

export type DefaultDateType = { [key: string]: string };

const getDateDefault = selector({
  key: `uniqueKey/${v1()}`,
  get: ({ get }) => {
    const totalAdStatusData = get(totalAdStatusState);
    const defaultDate: DefaultDateType = {
      startDate: "",
      endDate: "",
    };
    const dateData = totalAdStatusData
      .map((data: TotalAdStatusType) => {
        return data.date;
      })
      .sort();
    defaultDate.startDate = dateData[0];
    defaultDate.endDate = dateData[dateData.length - 1];
    return defaultDate;
  },
});

const dateDefault = atom({
  key: `uniqueKey/${v1()}`,
  default: getDateDefault,
});

const getDateRange = selector({
  key: `uniqueKey/${v1()}`,
  get: ({ get }) => {
    const defaultDate = get(dateDefault);
    const lastDate: Date = new Date(defaultDate.endDate);
    let startDate: Date = new Date(defaultDate.startDate);

    const weekData: DefaultDateType[] = [];
    while (startDate <= lastDate) {
      const range: DefaultDateType = {
        start: "",
        end: "",
      };
      const endDate: Date = new Date(addDays(startDate, 6));
      range.start = format(startDate, "M월 d일");
      range.end = format(endDate, "M월 d일");
      weekData.push(range);

      startDate = addDays(startDate, 7);
    }
    return weekData;
  },
});

export const dateRange = atom({
  key: `uniqueKey/${v1()}`,
  default: getDateRange,
});
