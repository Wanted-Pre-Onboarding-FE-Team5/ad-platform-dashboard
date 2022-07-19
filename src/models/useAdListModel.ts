import React from "react";
import { AdListDataType } from "./types";
import { dataService } from "../api/api";

export const useAdListModel = () => {
  const [adList, setAdList] = React.useState(null);
  const adListRequest = dataService("adList");

  const getAdList = async () => {
    const response = await adListRequest.get("");
    setAdList(response.data);
  };

  const putAdItemById = async (id: number, data: AdListDataType) => {
    return await adListRequest.put(`/${id}`, data);
  };

  const deleteAdList = async (id: number) => {
    const response = await adListRequest.delete(`/${id}`);
    setAdList(response.data);
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