import { atom, selector } from "recoil";
import {
    dataService,
    getTotalAdStatusData,
    getChannelStatusData,
  } from "../api/api";
  import { v1 } from "uuid";

  // getAdTotalStatusFromQuery,getAdListStatusFromQuery가 리턴하는 데이터를 각 컴포넌트에서 atom의 adListState,channelState,totalAdStatusState에 넣어주기
export const getQueryfromDashboard = atom({
    key: `uniqueKey/${v1()}`,
    default: "?date_gte=2022-02-01&date_lte=2022-02-07"
  })
  
  export const getAdTotalStatusFromQuery = selector({
    key: `uniqueKey/${v1()}`,
    get: ({get}) => {
      const query = get(getQueryfromDashboard)
      getTotalAdStatusData(dataService("totalAdStatus"), query);
    }
  });

  
  export const getQueryfromAdList = atom({
    key: `uniqueKey/${v1()}`,
    default: "?status=active&status=closed"
  })
  
  export const getAdListStatusFromQuery = selector({
    key: `uniqueKey/${v1()}`,
    get: ({get}) => {
      const query = get(getQueryfromDashboard);
      const data = dataService("adList").get(query).then((data)=>data);
      return data;
    },
  });
  