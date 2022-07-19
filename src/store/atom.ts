import { AxiosResponse } from 'axios';
import { atom, selector } from 'recoil';
import { adListRequest } from '../axiosFactory/adListAxios';
import { channelStatusRequest } from '../axiosFactory/channelStatusAxios';
import { totalAdStatusRequest } from '../axiosFactory/totalAdStatusAxios';
import { TotalAdStatusType } from '../models/types/index';
import { ChannelStatusType } from '../models/types/index';

export const dateState = atom({
  key: 'dateState',
  default: ['2022-02-01', '2022-02-07'],
});

export const progressState = atom({
  key: 'progressState',
  default: 'active',
});

export const adListSelector = selector({
  key: 'adListSelector',
  get: async ({ get }) => {
    const response: AxiosResponse<any, any> = await adListRequest.get_ad('');
    return response.data;
  },
});

export const adListState = atom({
  key: 'adListState',
  default: adListSelector,
});

const channelStateSelector = selector({
  key: 'channelStateSelector',
  get: async () => {
    const response: AxiosResponse<ChannelStatusType[]> = await channelStatusRequest.get_channel('');
    return response.data;
  },
});

export const channelState = atom({
  key: 'channelState',
  default: channelStateSelector,
});

const totalAdStatusSelector = selector({
  key: 'totalAdStatusSelector',
  get: async () => {
    const response: AxiosResponse<TotalAdStatusType[]> = await totalAdStatusRequest.get_total('');
    return response.data;
  },
});

export const totalAdStatusState = atom({
  key: 'totalAdStatusState',
  default: totalAdStatusSelector,
});
