import { AxiosResponse } from "axios";
import React from "react";
import { adListRequest } from "../axiosFactory/adListAxios";
import { AdListDataType } from "./types";
export const useAdListModel = () => {
  const [adList, setAdList] = React.useState(null);

  const updateAdList = (response: AxiosResponse<any, any>) => {
    setAdList(response.data);
  };

  const getAdList = async () => {
    const response = await adListRequest.get_ad("");
    updateAdList(response);
  };

  const putAdItemById = async (id: number, data: AdListDataType) => {
    return await adListRequest.put(`/${id}`, data);
  };

  const deleteAdList = async (id: number) => {
    const response = await adListRequest.delete(`/${id}`);
    updateAdList(response);
  };

  const postAdItemById = async (id: number, data: AdListDataType) => {
    return await adListRequest.post(`/${id}`, data);
  };

  return {
    adList,
    getAdList,
    putAdItemById,
    deleteAdList,
    postAdItemById,
  };
};
