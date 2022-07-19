import { atom, selector } from "recoil";
import {
  dataService,
  getTotalAdStatusData,
  getChannelStatusData,
} from "../api/api";
import { v1 } from "uuid";

export const adListSelector = selector({
  key: `uniqueKey/${v1()}`,
  get: async () => {
    const response = await dataService("adList").get("");
    return response.data;
  },
});

export const adListState = atom({
  key: `uniqueKey/${v1()}`,
  default: adListSelector,
});

const channelStateSelector = selector({
  key: `uniqueKey/${v1()}`,
  get: () => getChannelStatusData(dataService("channelStatus"), ""),
});

export const channelState = atom({
  key: `uniqueKey/${v1()}`,
  default: channelStateSelector,
});

export const totalAdStatusSelector = selector({
  key: `uniqueKey/${v1()}`,
  get: () => getTotalAdStatusData(dataService("totalAdStatus"), ""),
});

export const totalAdStatusState = atom({
  key: `uniqueKey/${v1()}`,
  default: totalAdStatusSelector,
});
