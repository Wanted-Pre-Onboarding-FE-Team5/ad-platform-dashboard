import { AxiosResponse } from "axios";
import { atom, selector } from "recoil";
import { adListRequest } from "../axiosFactory/adListAxios";
import { channelStatusRequest } from "../axiosFactory/channelStatusAxios";
import { totalAdStatusRequest } from "../axiosFactory/totalAdStatusAxios";
import { TotalAdStatusType } from "../types/totalAdStatusType";

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
    const response : AxiosResponse<TotalAdStatusType[]> = await totalAdStatusRequest.get("");
    return response.data;
  },
});

export const totalAdStatusState = atom({
  key: "totalAdStatusState",
  default: totalAdStatusSelector,
});