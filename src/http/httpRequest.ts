import { AxiosResponse } from 'axios';
import { TotalAdStatusType } from '../types/totalAdStatusType';
import { TotalAdStatusServiceType } from '../types/totalAdStatusType'

interface HttpRequestType {
  get: (url: string) => Promise<AxiosResponse<TotalAdStatusType[]>>
}

export class HttpRequest implements HttpRequestType {
  constructor(private service : TotalAdStatusServiceType) {
    this.service = service;
  }
  get(url: string) {
    return this.service.get<TotalAdStatusType[]>(url);
  }
}

//AxiosResponse 의 형태
//https://axios-http.com/kr/docs/res_schema
//https://www.delftstack.com/howto/typescript/axios-typescript/
