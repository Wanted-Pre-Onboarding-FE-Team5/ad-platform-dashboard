import React from 'react';
import { channelStatusRequest } from '../services/channelStatusService';
export const useChannelStatusModel = () => {
  const [channelStatus, setChannelStatus] = React.useState(null);

  const updateChannelStatus = (response) => {
    setChannelStatus(response.data);
  };

  const getChannelStatus = async () => {
    const response = await channelStatusRequest.get('');
    updateChannelStatus(response);
  };

  // const patchMovieById = async (id, data) => {
  //   return await movieRequest.patch(id, data);
  // };

  return {
    channelStatus,
    getChannelStatus,
    // patchMovieById,
  };
};
