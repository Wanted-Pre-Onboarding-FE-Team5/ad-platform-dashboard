import React from 'react';
import { useRecoilState } from 'recoil';
import { channelState } from '../../../store/atom';
import { ChannelStatusType } from '../../../models/types';
import { dataService, getChannelStatusData } from '../../../api/api';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '광고비',
    페이스북: 4000,
    네이버: 2400,
    구글: 2400,
    카카오: 3000,
  },
  {
    name: '매출',
    페이스북: 4000,
    네이버: 2400,
    구글: 2400,
    카카오: 3000,
  },
  {
    name: '노출수',
    페이스북: 4000,
    네이버: 2400,
    구글: 2400,
    카카오: 3000,
  },
  {
    name: '클릭수',
    페이스북: 4000,
    네이버: 2400,
    구글: 2400,
    카카오: 3000,
  },
  {
    name: '전환수',
    페이스북: 4000,
    네이버: 2400,
    구글: 2400,
    카카오: 3000,
  },
];

const StackedBarChart = () => {
  // const [channelStatus, setChannelStatus] = useRecoilState<ChannelStatusType[]>(channelState);

  // React.useEffect(() => {
  //   getChannelStatusData(dataService('channelStatus'), '')
  //     .then((data) => setChannelStatus(data))
  //     .catch(() => console.log('data dispatch error'));
  // }, [setChannelStatus]);
  // console.log(channelStatus);

  return (
    <div style={{ width: '100%', height: 400 }}>
      <ResponsiveContainer>
        <BarChart
          width={900}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 20,
          }}
        >
          {/* <CartesianGrid strokeDasharray='1 0' /> */}
          {/* TODO X축이 각 매체의 광고비, 매출, 노출수, 클릭 수, 전환수 가 되게 하기*/}
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey='페이스북' stackId='a' fill='#4fadf7' />
          <Bar dataKey='네이버' stackId='a' fill='#85da47' />
          <Bar dataKey='구글' stackId='a' fill='#ac8af8' />
          <Bar dataKey='카카오' stackId='a' fill='#f7d500' />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StackedBarChart;
