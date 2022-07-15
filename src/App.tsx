import React from 'react';
import { useTotalAdStatusModel } from '../src/models/useTotalAdStatusModel';

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

  React.useEffect(() => {
    getTotalAdStatus();
  }, []);

  console.log(totalAdStatus === null ? [] : totalAdStatus['daily']);

  const dailyAdStatusList: JSX.Element[] = (totalAdStatus === null ? [] : totalAdStatus['daily'])?.map((dailyAd: TotalReportDataType, index: number) => {
    return (
      <ul key={index}>
        <li key={dailyAd.imp}>imp: {dailyAd.imp}</li>
        <li key={dailyAd.click}>click: {dailyAd.click}</li>
        <li key={dailyAd.cost}>cost: {dailyAd.cost}</li>
        <li key={dailyAd.conv}>conv: {dailyAd.conv}</li>
        <li key={dailyAd.convValue}>convValue: {dailyAd.convValue}</li>
        <li key={dailyAd.ctr}>ctr: {dailyAd.ctr}</li>
        <li key={dailyAd.cvr}>cvr: {dailyAd.cvr}</li>
        <li key={dailyAd.cpc}>cpc: {dailyAd.cpc}</li>
        <li key={dailyAd.cpa}>cpa: {dailyAd.cpa}</li>
        <li key={dailyAd.roas}>roas: {dailyAd.roas}</li>
        <li key={dailyAd.date}>date: {dailyAd.date}</li>
      </ul>
    );
  });

  return <div>{dailyAdStatusList}</div>;
};

export default App;
