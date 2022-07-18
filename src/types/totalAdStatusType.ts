import { AxiosInstance } from "axios";

export type TotalAdStatusType = {
  imp: number;
  click: number;
  cost: number;
  conv: number;
  convValue: number;
  ctr: number;
  cvr: number;
  cpc: number;
  cpa: number;
  roas: number;
  date: string;
  name?: string;
};

export type TotalAdStatusServiceType = AxiosInstance;