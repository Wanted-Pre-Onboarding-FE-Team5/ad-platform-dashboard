import axios, { AxiosInstance, AxiosResponse } from "axios";
import {
  TotalAdStatusType,
  ChannelStatusType
} from "../models/types";

const BASE_URL = "http://localhost:8000";
const DB_URL = {
  adList: "/ad-list",
  channelStatus: "/channel-report",
  totalAdStatus: "/total-report",
};

type DbType = "adList" | "channelStatus" | "totalAdStatus";

interface DataServiceType {
  (dbType: DbType): AxiosInstance;
}

export const dataService: DataServiceType = (dbType) =>
  axios.create({ baseURL: `${BASE_URL}${DB_URL[dbType]}` });

export const getTotalAdStatusData = async <T = TotalAdStatusType[]>(
  service: AxiosInstance,
  url: string = ""
): Promise<T> => {
  const response: AxiosResponse<T> = await service.get(url);
  return response.data;
};

export const getChannelStatusData = async <T = ChannelStatusType[]>(
  service: AxiosInstance,
  url: string = ""
): Promise<T> => {
  const response: AxiosResponse<T> = await service.get(url);
  return response.data;
};