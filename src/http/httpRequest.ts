import { AxiosResponse, AxiosInstance } from 'axios';
import { TotalAdStatusType } from '../types/totalAdStatusType';
import { ChannelStatusType } from './../types/channelStatusType';
interface HttpRequestType {
  get: (url: string) => Promise<AxiosResponse<TotalAdStatusType[]>>;
  get_channel: (url: string) => Promise<AxiosResponse<ChannelStatusType[]>>;
}

export class HttpRequest implements HttpRequestType {
  constructor(private service: AxiosInstance) {
    this.service = service;
  }
  get(url: string) {
    return this.service.get<TotalAdStatusType[]>(url);
  }
  get_channel(url: string) {
    return this.service.get<ChannelStatusType[]>(url);
  }
}

//AxiosResponse 의 형태
//https://axios-http.com/kr/docs/res_schema
//https://www.delftstack.com/howto/typescript/axios-typescript/
