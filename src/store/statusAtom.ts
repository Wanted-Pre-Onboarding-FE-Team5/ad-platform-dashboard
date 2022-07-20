import { atom, selector } from "recoil";
import { v1 } from "uuid";
import { AdListDataType } from "../models/types";
import { adListState } from "./atom";

type EndDateType = string | null;
type EndDateAndIdType = {
  id: number;
  endDate: EndDateType;
};

const getEndDateAndId = selector({
  key: `uniqueKey/${v1()}`,
  get: ({ get }) => {
    const adListData = get(adListState);
    const getData = adListData.map((adList: AdListDataType) => {
      const template: EndDateAndIdType = {
        id: -1,
        endDate: "",
      };
      template.id = adList.id;
      template.endDate = adList.endDate;
      return template;
    });
    return getData;
  },
});

export const closeAd = selector({
  key: `uniqueKey/${v1()}`,
  get: ({ get }) => {
    const endDateAndId: EndDateAndIdType[] = get(getEndDateAndId);
    endDateAndId.map((item: EndDateAndIdType) =>
      item.endDate === null
        ? null
        : console.log(
            `patch써서 status상태를 closed로 바꿔주는 함수를 넣어주면됩니다. id는 item.id`
          )
    );
  },
});

export const progressState = atom({
  key: `uniqueKey/${v1()}`,
  default: {
    all: "전체 광고",
    active: "진행 중",
    closed: "진행 종료",
  },
});
