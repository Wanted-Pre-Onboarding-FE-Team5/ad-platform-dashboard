import React from 'react';
import { useRecoilState } from 'recoil';
import { channelState } from '../../../store/atom';
import { ChannelStatusType } from '../../../models/types';
import { dataService, getChannelStatusData } from '../../../api/api';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// const data = [
//   {
//     name: 'Page A',
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: 'Page B',
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: 'Page C',
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
// ];

const StackedBarChart = () => {
  const [channelStatus, setChannelStatus] = useRecoilState<ChannelStatusType[]>(channelState);

  React.useEffect(() => {
    getChannelStatusData(dataService('channelStatus'), '')
      .then((data) => setChannelStatus(data))
      .catch(() => console.log('data dispatch error'));
  }, [setChannelStatus]);
  console.log(channelStatus);

  return (
    <div style={{ width: '100%', height: 400 }}>
      <ResponsiveContainer>
        <BarChart
          width={900}
          height={400}
          data={channelStatus}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          {/* <CartesianGrid strokeDasharray='1 0' /> */}
          {/* TODO X축이 각 매체의 광고비, 매출, 노출수, 클릭 수, 전환수 가 되게 하기*/}
          <XAxis dataKey='cost' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey='pv' stackId='a' fill='#4fadf7' />
          <Bar dataKey='uv' stackId='a' fill='#85da47' />
          <Bar dataKey='amt' stackId='a' fill='#ac8af8' />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StackedBarChart;
