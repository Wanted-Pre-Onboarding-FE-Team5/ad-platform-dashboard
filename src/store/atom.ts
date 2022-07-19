import { atom, selector } from "recoil";
import {
  dataService,
  getTotalAdStatusData,
  getChannelStatusData,
} from "../api/api";

export const dateState = atom({
  key: 'dateState',
  default: ['2022-02-01', '2022-02-07'],
});

export const progressState = atom({
  key: 'progressState',
  default: 'active',
});

export const adListSelector = selector({
  key: "adListSelector",
  get: async () => {
    const response = await dataService("adList").get("");
    return response.data;
  },
});

export const adListState = atom({
  key: 'adListState',
  default: adListSelector,
});

const channelStateSelector = selector({
  key: "channelStateSelector",
  get: () => getChannelStatusData(dataService("channelStatus"), ""),
});

export const channelState = atom({
  key: 'channelState',
  default: channelStateSelector,
});

const totalAdStatusSelector = selector({
  key: "totalAdStatusSelector",
  get: () => getTotalAdStatusData(dataService("totalAdStatus"), ""),
});

export const totalAdStatusState = atom({
  key: 'totalAdStatusState',
  default: totalAdStatusSelector,
});
