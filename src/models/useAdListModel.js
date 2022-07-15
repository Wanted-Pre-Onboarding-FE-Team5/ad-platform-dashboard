import React from 'react';
import { adListRequest } from '../axiosFactory/adListAxios';
export const useAdListModel = () => {
  const [adList, setAdList] = React.useState(null);

  const updateAdList = (response) => {
    setAdList(response.data);
  };

  const getAdList = async () => {
    const response = await adListRequest.get('');
    updateAdList(response);
  };

  const putAdItemById = async (id, data) => {
    return await adListRequest.put(id, data);
  };

  return {
    adList,
    getAdList,
    putAdItemById,
  };
};
