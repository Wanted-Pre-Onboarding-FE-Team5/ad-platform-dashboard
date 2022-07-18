import { AxiosResponse } from "axios";
import { totalAdStatusRequest } from "../axiosFactory/totalAdStatusAxios";
import { TotalAdStatusType } from "../types/totalAdStatusType";

export const useTotalAdStatusModel = () => {
  const getTotalAdStatus = async (url : string) : Promise<TotalAdStatusType[]> => {
    const response : AxiosResponse<TotalAdStatusType[]> = await totalAdStatusRequest.get(url);
    return response.data
  };

  return {
    getTotalAdStatus
  };
};