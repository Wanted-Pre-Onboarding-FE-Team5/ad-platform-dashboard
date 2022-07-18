import { AxiosResponse } from "axios";
import { AdListDataType } from "../models/types";
import { TotalAdStatusType } from "../types/totalAdStatusType";
import { TotalAdStatusServiceType } from "../types/totalAdStatusType";

interface HttpRequestType {
  get: (url: string) => Promise<AxiosResponse<TotalAdStatusType[]>>;
}

export class HttpRequest implements HttpRequestType {
  constructor(private service: TotalAdStatusServiceType) {
    this.service = service;
  }
  // get(url: string) {
  //   return this.service.get<TotalAdStatusType[]|AdListDataType[]>(url);
  // }

  get(url: string) {
    return this.service.get(url);
  }

  put(url: string, data: any) {
    return this.service.put(url, data);
  }
}

//AxiosResponse 의 형태
//https://axios-http.com/kr/docs/res_schema
//https://www.delftstack.com/howto/typescript/axios-typescript/
