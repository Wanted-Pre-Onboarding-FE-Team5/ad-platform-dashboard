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
    const response = await adListRequest.get("");
    updateAdList(response);
  };

  const putAdItemById = async (id: number, data: AdListDataType) => {
    return await adListRequest.put(`/${id}`, data);
  };

  return {
    adList,
    getAdList,
    putAdItemById,
  };
};
