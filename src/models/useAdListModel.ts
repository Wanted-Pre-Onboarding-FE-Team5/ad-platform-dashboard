import { AdListDataType } from "./types";
import { dataService } from "../api/api";

export const useAdListModel = () => {
  const adListRequest = dataService("adList");

  const getAdList = async (url:string="") => {
    const response = await adListRequest.get(url);
    return response.data;
  };

  const putAdItemById = async (id: number, data: AdListDataType) => {
    return await adListRequest.put(`/${id}`, data);
  };

  const deleteAdList = async (id: number) => {
    const response = await adListRequest.delete(`/${id}`);
    console.log(response.data);
  };

  const postAdItemById = async (data: AdListDataType) => {
    await adListRequest
      .post(`http://localhost:8000/ad-list`, data)
      .then((response) => console.log(response.data))
      .catch((e) => {
        console.log(e);
      });
  };

  return {
    getAdList,
    putAdItemById,
    deleteAdList,
    postAdItemById,
  };
};
