import { AxiosInstance } from 'axios';

//슬기의 http request만 남기고 삭제
export class HttpRequest {
  constructor(private service: AxiosInstance) {
    this.service = service;
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