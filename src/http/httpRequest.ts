import { AxiosResponse, AxiosInstance } from 'axios';
import { TotalAdStatusType } from "../models/types/index";
import { ChannelStatusType } from './../types/channelStatusType';

interface HttpRequestType {
  get_total: (url: string) => Promise<AxiosResponse<TotalAdStatusType[]>>;
  get_channel: (url: string) => Promise<AxiosResponse<ChannelStatusType[]>>;
}

export class HttpRequest implements HttpRequestType {
  constructor(private service: AxiosInstance) {
    this.service = service;
  }

  get_total(url: string) {
    return this.service.get<TotalAdStatusType[]>(url);
  }

  get_channel(url: string) {
    return this.service.get<ChannelStatusType[]>(url);
  }

  get_ad(url: string) {
    return this.service.get(url);
  }

  put(url: string, data: any) {
    return this.service.put(url, data);
  }

  delete(url: string) {
    return this.service.delete(url);
  }

  post(url: string, data: any) {
    return this.service.post(url, data);
  }

}