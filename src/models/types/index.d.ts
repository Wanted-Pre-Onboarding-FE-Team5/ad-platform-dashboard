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
