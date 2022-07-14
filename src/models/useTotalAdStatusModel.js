import React from 'react';
import { totalAdStatusRequest } from '../services/totalAdStatusService';
export const useTotalAdStatusModel = () => {
  const [totalAdStatus, setTotalAdStatus] = React.useState(null);

  const updateTotalAdStatus = (response) => {
    setTotalAdStatus(response.data);
  };

  const getTotalAdStatus = async () => {
    const response = await totalAdStatusRequest.get('');
    updateTotalAdStatus(response);
  };

  return {
    totalAdStatus,
    getTotalAdStatus,
  };
};
