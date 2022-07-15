import { AxiosInstance, AxiosResponse } from 'axios';

type Axios = AxiosInstance;

interface HttpRequestType {
  get: (url: string) => Promise<AxiosResponse<any, any>>;
}

export class HttpRequest implements HttpRequestType {
  constructor(private service: Axios) {
    this.service = service;
  }
  get(url: string) {
    return this.service.get(url);
  }
}
