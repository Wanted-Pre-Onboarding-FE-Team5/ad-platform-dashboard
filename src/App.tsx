import React from "react";
import { useTotalAdStatusModel } from "../src/models/useTotalAdStatusModel";

//렌더링 되는데 이상하게 새로고침하면 사라짐. 안보임..?

type TotalReportDataType = {
  //total-report 데이터 타입
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
};

const App = () => {
  const { totalAdStatus, getTotalAdStatus } = useTotalAdStatusModel();
  const [adStatus, setAdStatus] = React.useState([]);

  React.useEffect(() => {
    getTotalAdStatus();
    if (totalAdStatus === null) setAdStatus([]);
    else setAdStatus(totalAdStatus["daily"]);
  }, []);

  console.log(totalAdStatus === null ? [] : totalAdStatus["daily"]);

  // map함수로 배열을 새로 생성한 후 return으로 컴포넌트를 반환할 수 있습니다.
  const adStatusList: JSX.Element[] = adStatus?.map(
    (ad: TotalReportDataType, index:number) => {
      return (
        <ul key={index}>
          <li key={ad.imp}>{ad.imp}</li>
          <li key={ad.click}>{ad.click}</li>
          <li key={ad.cost}>{ad.cost}</li>
          <li key={ad.conv}>{ad.conv}</li>
          <li key={ad.convValue}>{ad.convValue}</li>
          <li key={ad.ctr}>{ad.ctr}</li>
          <li key={ad.cvr}>{ad.cvr}</li>
          <li key={ad.cpc}>{ad.cpc}</li>
          <li key={ad.cpa}>{ad.cpa}</li>
          <li key={ad.roas}>{ad.roas}</li>
          <li key={ad.date}>{ad.date}</li>
        </ul>
      );
    }
  ); 

  return <div>{adStatusList}</div>;
};

export default App;
