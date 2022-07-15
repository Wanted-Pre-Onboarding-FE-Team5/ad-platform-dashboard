import { AxiosResponse } from "axios";
import { atom, selector } from "recoil";
import { adListRequest } from "../axiosFactory/adListAxios";
import { channelStatusRequest } from "../axiosFactory/channelStatusAxios";
import { totalAdStatusRequest } from "../axiosFactory/totalAdStatusAxios";

/* atom = 상태만
 * selector = 순수함수 (동기|비동기) 필요한 함수만 export
 * 각각 고유한 key
 * default = 초기값
 *
 * 현재진행중|완료 = 상태 atoms
 * 데이터 받아오는 get 함수 = selectors 3개
 * 유미&연진 = date 형식 2022-03-02  | 슬기님 = status
 */
export const dateState = atom({
  key: "dateState",
  default: ["2022-02-01", "2022-02-07"],
});

export const progressState = atom({
  key: "progressState",
  default: "active",
});

const adListSelector = selector({
  key: "adListSelector",
  get: async () => {
    const response: AxiosResponse<any, any> = await adListRequest.get("");
    return response.data;
  },
});

export const adListState = atom({
  key: "adListState",
  default: adListSelector,
});

const channelStateSelector = selector({
  key: "channelStateSelector",
  get: async () => {
    const response: AxiosResponse<any, any> = await channelStatusRequest.get(
      ""
    );
    return response.data;
  },
});

export const channelState = atom({
  key: "channelState",
  default: channelStateSelector,
});

const totalAdStatusSelector = selector({
  key: "totalAdStatusSelector",
  get: async () => {
    const response : AxiosResponse<any, any> = await totalAdStatusRequest.get("");
    return response.data;
  },
});

export const totalAdStatusState = atom({
  key: "totalAdStatusState",
  default: totalAdStatusSelector,
});
