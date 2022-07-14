import React from 'react';
import { useAdListModel } from '../src/models/useAdListModel';

function App() {
  const { adList, getAdList, putAdItemById } = useAdListModel();

  React.useEffect(() => {
    getAdList();
  }, []);
  console.log({ adList });
  return <div>Hello</div>;
}

export default App;
