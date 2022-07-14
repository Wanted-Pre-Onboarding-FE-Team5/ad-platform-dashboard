import { AxiosInstance, AxiosResponse } from 'axios';

type Service = AxiosInstance;

interface HttpRequestType {
  get: (url: string) => Promise<AxiosResponse<any, any>>
}

export class HttpRequest implements HttpRequestType {
  constructor(private service: Service) {
    this.service = service;
  }
  get(url: string) {
    return this.service.get(url);
  }
}
