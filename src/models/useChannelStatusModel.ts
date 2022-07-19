import { AxiosResponse } from 'axios';
import { channelStatusRequest } from '../axiosFactory/channelStatusAxios';
import { ChannelStatusType } from '../models/types/index';

export const useChannelStatusModel = () => {
  const getChannelStatus = async (url: string): Promise<ChannelStatusType[]> => {
    const response: AxiosResponse<ChannelStatusType[]> = await channelStatusRequest.get_channel(url);
    return response.data;
  };

  return {
    getChannelStatus,
  };
};
