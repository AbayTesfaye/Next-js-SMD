'use client';
import Image from 'next/image';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mon',
    present: 70,
    absent: 38,
  },
  {
    name: 'Tue',
    present: 80,
    absent: 50,
  },
  {
    name: 'Wend',
    present: 66,
    absent: 78,
  },
  {
    name: 'Thur',
    present: 70,
    absent: 68,
  },
  {
    name: 'Fri',
    present: 90,
    absent: 48,
  },
];

const AttendanceChart = () => {
  return (
    <div className='bg-white rounded-lg p-4 h-full'>
      <div className='flex justify-between'>
        <h1 className='text-lg font-semibold'>Attendance</h1>
        <Image src='/moreDark.png' alt='' width={20} height={20} />
      </div>
      <div style={{ height: '300px' }}> {/* Adjust height to fit chart */}
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            barSize={20}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd' />
            <XAxis dataKey="name" axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false} />
            <YAxis axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false}  />
            <Tooltip contentStyle={{borderRadius:'10px',borderColor:'lightgray'}}/>
            <Legend align='left' verticalAlign='top' wrapperStyle={{paddingTop:'20px',paddingBottom:'40px'}}/>
            <Bar dataKey="present" fill="#FAE27C"  legendType='circle' radius={[10,10,0,0]} />
            <Bar dataKey="absent" fill="#C3EBFA" legendType='circle' radius={[10,10,0,0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default AttendanceChart;
