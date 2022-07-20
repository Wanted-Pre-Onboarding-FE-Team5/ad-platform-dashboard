import React from 'react';
// import { useRecoilState } from 'recoil';
// import { channelState } from '../../../store/atom';
// import { ChannelStatusType } from '../../../models/types';
// import { dataService, getChannelStatusData } from '../../../api/api';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

function createData(channel: string, cost: number, cpa: number, roas: number, imp: number, click: number, ctr: number, cpc: number, cvr: number, convValue: number) {
  return { channel, cost, cpa, roas, imp, click, ctr, cpc, cvr, convValue };
}

const rows = [
  createData('페이스북', 12345678, 12345678, 12345678, 12345678, 12345678, 12345678, 12345678, 12345678, 12345678),
  createData('네이버', 12345678, 12345678, 12345678, 12345678, 12345678, 12345678, 12345678, 12345678, 12345678),
  createData('구글', 12345678, 12345678, 12345678, 12345678, 12345678, 12345678, 12345678, 12345678, 12345678),
];

const BasicTable = () => {
  // const [channelStatus, setChannelStatus] = useRecoilState<ChannelStatusType[]>(channelState);

  // React.useEffect(() => {
  //   getChannelStatusData(dataService('channelStatus'), '')
  //     .then((data) => setChannelStatus(data))
  //     .catch(() => console.log('data dispatch error'));
  // }, [setChannelStatus]);
  // console.log(channelStatus);

  return (
    <div style={{ width: '100%' }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell align='right'>광고비</TableCell>
              <TableCell align='right'>매출</TableCell>
              <TableCell align='right'>ROAS</TableCell>
              <TableCell align='right'>노출수</TableCell>
              <TableCell align='right'>클릭수</TableCell>
              <TableCell align='right'>클릭률(CTR)</TableCell>
              <TableCell align='right'>클릭당비용(CPC)</TableCell>
              <TableCell align='right'>전환율(CVR)</TableCell>
              <TableCell align='right'>전환수(CONVVALUE)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.channel} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component='th' scope='row'>
                  {row.channel}
                </TableCell>
                <TableCell align='right'>{row.cost}</TableCell>
                <TableCell align='right'>{row.cpa}</TableCell>
                <TableCell align='right'>{row.roas}</TableCell>
                <TableCell align='right'>{row.imp}</TableCell>
                <TableCell align='right'>{row.click}</TableCell>
                <TableCell align='right'>{row.ctr}</TableCell>
                <TableCell align='right'>{row.cpc}</TableCell>
                <TableCell align='right'>{row.cvr}</TableCell>
                <TableCell align='right'>{row.convValue}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default BasicTable;
