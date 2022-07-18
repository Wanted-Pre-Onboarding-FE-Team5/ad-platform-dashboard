import { TotalAdStatusType } from '../types/totalAdStatusType'

type FormatType = {
  (sum: number): string | undefined;
}

const essentialStatus: any = [
  "roas",
  "click",
  "cost",
  "imp",
  "conv",
  "convValue",
];

export enum CashUnits {
  thousand = 1000,
  tenThousand = 10000,
  tenMillion = 10000000,
  hundredmillion = 100000000,
}

export const calcWeeklySum: any = (totalAdStatus: TotalAdStatusType[], callback: any) => {
  const weeklySum: any = [];
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

  return callback(weeklySum); //(6)[{roasSum:~},{clickSum:~},....]
};

// type FormatType = {
//   (sum: number): string;
// }

const weeklySumFormat :FormatType = (statusSum) => { 
  const statusKey = Object.keys(statusSum)[0];
  const sum = Object.values(statusSum)[0];  
  
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

export const useWeeklyStatusCallback = (weeklySum:{[key:string]:number}) : string[] => {
  const weeklyAdStatus : any[] = [];
  for (const statusSum of Object.values(weeklySum)) {
    weeklyAdStatus.push(weeklySumFormat(statusSum));
  }  
  return weeklyAdStatus;
}


/*
  let roasSum = 0;
  totalAdStatus.forEach((item) => {
    roasSum += item.roas;
  });

  let costSum = 0;
  totalAdStatus.forEach((item) => {
    costSum += item.cost;
  });

  let impSum = 0;
  totalAdStatus.forEach((item) => {
    impSum += item.imp;
  });

  let clickSum = 0;
  totalAdStatus.forEach((item) => {
    clickSum += item.click;
  });

  let convSum = 0;
  totalAdStatus.forEach((item) => {
    convSum += item.conv;
  });

  let convValueSum = 0;
  totalAdStatus.forEach((item) => {
    convValueSum += item.convValue;
  });


  // 데이터 가공 -> roas는 평균내고 나머지는 누적
  const essentialKey : any = ["roas", "click", "cost", "imp", "conv", "convValue"];
  const statusSumByEssentialKey : any= [];
  for(let i : number = 0;i<essentialKey.length;i++) {
    let sum : number = 0;
    totalAdStatus.forEach((dailyStatus : any)=>{
       sum += dailyStatus[`${essentialKey[i]}`];
    })
    const temp : any = {};
    temp[`${essentialKey[i]}Sum`]= sum;
    statusSumByEssentialKey.push(temp);
    sum=0;
  }
  console.log(statusSumByEssentialKey); //(6)[{roasRum:~},{clickSum:~},....]

// ROAS : {Math.ceil(roasSum / 7)}%
// 클릭수 :{((Math.ceil(clickSum / 1000) * 1000) / 10000).toLocaleString("ko-KR")}만 회
// 광고비 :{((Math.ceil(costSum / 10000) * 10000) / 10000).toLocaleString("ko-KR")}만 원
// 노출수 :{((Math.ceil(impSum / 10000) * 10000) / 10000).toLocaleString("ko-KR")}만 회
// 전환수 : {convSum.toLocaleString("ko-KR")}회
// 매출 : {(Math.ceil(convValueSum / 10000000) * 10000000) / 100000000}억 원
*/