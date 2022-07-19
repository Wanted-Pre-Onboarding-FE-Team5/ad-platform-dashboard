import { TotalAdStatusType } from "./types";

export enum CashUnits {
  thousand = 1000,
  tenThousand = 10000,
  tenMillion = 10000000,
  hundredmillion = 100000000,
}

const essentialStatus: string[] = [
  "roas",
  "click",
  "cost",
  "imp",
  "conv",
  "convValue",
];

type WeeklySumType = {
  [key:string]:number
}

export const calculateSum = (totalAdStatus: TotalAdStatusType[], callback :any) : string[] => {
  const weeklySum : WeeklySumType[] = [];
  for (let i: number = 0; i < essentialStatus.length; i++) {
    let sum: number = 0;
    totalAdStatus.forEach((dailyStatus: any) => {
      sum += dailyStatus[`${essentialStatus[i]}`];
    });
    const temp: {[key:string]:number} = {};
    temp[`${essentialStatus[i]}Sum`] = sum;
    weeklySum.push(temp);
    sum = 0;
  }

  return callback(weeklySum); 
};

const getFormatBySum = (statusSum:WeeklySumType) : string|undefined => { 
  const statusKey : string = Object.keys(statusSum)[0];
  const sum : number = Object.values(statusSum)[0];  
  
  switch (statusKey) {
      case "roasSum":
        return `ROAS : ${Math.ceil(sum / 7)}%`;
      case "clickSum":
        return `클릭수 : ${(
          (Math.ceil(sum / CashUnits.thousand) * CashUnits.thousand) /
          CashUnits.tenThousand
        ).toLocaleString("ko-KR")}만 회`;
        case "costSum":
        return `광고비 : ${(
          (Math.ceil(sum / CashUnits.tenThousand) * CashUnits.tenThousand) /
          CashUnits.tenThousand
        ).toLocaleString("ko-KR")}만 원`;
      case "impSum":
        return `노출수 :${(
          (Math.ceil(sum / CashUnits.tenThousand) * CashUnits.tenThousand) /
          CashUnits.tenThousand
        ).toLocaleString("ko-KR")}만 회`;
      case "convSum":
        return `전환수 : ${sum.toLocaleString("ko-KR")}회`;
      case "convValueSum":
        return `매출 : ${
          (Math.ceil(sum / CashUnits.tenMillion) * CashUnits.tenMillion) /
          CashUnits.hundredmillion
        }억 원`;
      default:
        break;
    }
};

type ParameterType = {
  [key:number]:WeeklySumType
}

export const calculateSumCallback = (weeklySum:ParameterType) => {
  const weeklyAdStatus : (string|undefined)[] = [];
  for (const statusSum of Object.values(weeklySum)) {
    weeklyAdStatus.push(getFormatBySum(statusSum));
  }  
  return weeklyAdStatus;
}