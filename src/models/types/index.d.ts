export type DataTypeGeneric =
  | AdListDataType
  | TotalAdStatusType
  | ChannelStatusType;

export type AdListDataType = {
  id: number;
  adType: string;
  title: string;
  budget: number;
  status: string;
  startDate: string;
  endDate: string | null;
  report: ReportType;
};

export type ReportType = {
  cost: number;
  convValue: number;
  roas: number;
};

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
  name?: string; //안쓸거면 지우기
};

export type ChannelStatusType = {
  channel: string;
  date: string;
  imp: number;
  click: number;
  cost: number;
  convValue: number;
  ctr: number;
  cvr: number;
  cpc: number;
  cpa: number;
  roas: number;
};
