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

//TODO getData 함수 interface로 따로 type설정해서 한번에 type주니까 왜 안될까..?
//TODO type이 맞지 않아서 결국 함수 분리 => 합치는 방법 없는지 꼭 찾아보기
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

// export const getData = async <T>(service : AxiosInstance , url: string = "") : Promise<T>=> {
//   const response : AxiosResponse<T> = await service.get(url);
//   return response.data;
// };