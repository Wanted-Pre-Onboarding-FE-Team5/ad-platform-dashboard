import { AxiosResponse } from "axios";
import React from "react";
import { totalAdStatusRequest } from "../axiosFactory/totalAdStatusAxios";

export const useTotalAdStatusModel = () => {
  const [totalAdStatus, setTotalAdStatus] = React.useState(null);

  const updateTotalAdStatus = (response: AxiosResponse<any, any>) => {
    setTotalAdStatus(response.data);
  };

  const getTotalAdStatus = async () => {
    const response = await totalAdStatusRequest.get("");
    updateTotalAdStatus(response);
  };

  return {
    totalAdStatus,
    getTotalAdStatus,
  };
};
