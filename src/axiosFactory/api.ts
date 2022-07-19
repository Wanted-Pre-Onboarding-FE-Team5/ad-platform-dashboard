import axios, { AxiosInstance, AxiosResponse } from "axios";
import { DataTypeGeneric } from "../models/types"

//BASE_URL은 기준 서버 돌아가는 포트
//DB_URL은 각 db에 연결할 상대적 url 주소들을 모은 객체
const BASE_URL = "http://localhost:8000";
const DB_URL = {
  adList: "/ad-list",
  channelStatus: "/channel-report",
  totalAdStatus: "/total-report",
};

type DbType = "adList" | "channelStatus" | "totalAdStatus"; //이 타입을 지정하지 않으면 파라미터로 DB_URL을 읽지 못함
//또한 type을 지정해줌으로써 파라미터 넣을때 autoComplete으로 뜸!

interface DataServiceType {
    (dbType: DbType) : AxiosInstance
}

/* axioFactory
dataService(dbType)을 사용하면 axiosinstance만 있음.뒤에 http request method를 필수로 지정해줘야 맞춰서 데이터 받아옴
유미,연진은 get만 필요해서 따로 http request에 작성할 필요없음
슬기 get, put, patch, post, delete 등 http request가 많아서 http request를 그대로 사용해도 될거같음
*/
export const dataService : DataServiceType = (dbType)=>
  axios.create({ baseURL: `${BASE_URL}${DB_URL[dbType]}` });

//각각의 use~Model + httprequest 합침.
//실제로 데이터를 받아오는 코드 부분 = get 기준!
//getData 함수 interface로 따로 type설정해서 한번에 type주니까 왜 안될까..?
export const getData = async <T=DataTypeGeneric[]>(service : AxiosInstance ,url: string = "") : Promise<T>=> { 
  const response : AxiosResponse<T> = await service.get(url);
  return response.data; //Promise 형태로 반환됨.
};
// getData로 받아온 데이터 사용 예시
// React.useEffect(() => {
//     getData.dataService("totalAdStatus"),url)
//       .then((data) => recoil세터함수(data))
//       .catch(() => console.log("data dispatch error"));
//   }, [recoil세터함수]);