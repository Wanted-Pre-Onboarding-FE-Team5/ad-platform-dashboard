import React from 'react';
import { useAdListModel } from '../src/models/useAdListModel';
import { useChannelStatusModel } from '../src/models/useChannelStatusModel';
import { useTotalAdStatusModel } from '../src/models/useTotalAdStatusModel';

function App() {
  const { adList, getAdList, putAdItemById } = useAdListModel();
  const { channelStatus, getChannelStatus } = useChannelStatusModel();
  const { totalAdStatus, getTotalAdStatus } = useTotalAdStatusModel();

  React.useEffect(() => {
    getAdList();
    getChannelStatus();
    getTotalAdStatus();
  }, []);

  console.log({ adList, channelStatus, totalAdStatus });
  return <div>Hello</div>;
}

export default App;
