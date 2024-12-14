'use client'
import Image from "next/image";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', income: 5000, expense: 2000 },
  { name: 'Feb', income: 5000, expense: 2000 },
  { name: 'Mar', income: 8500, expense: 2500 },
  { name: 'Apr', income: 5200, expense: 5000 },
  { name: 'May', income: 1200, expense: 7000 },
  { name: 'Jun', income: 3800, expense: 4200 },
  { name: 'Jul', income: 8500, expense: 2800 },
  { name: 'Aug', income: 2000, expense: 4500 },
  { name: 'Sep', income: 1800, expense: 8900 },
  { name: 'Oct', income: 6000, expense: 1000 },
  { name: 'Nov', income: 2900, expense: 4600 },
  { name: 'Dec', income: 1800, expense: 5000 },
];

const FinanceChart = () => {
  return (
    <div className='bg-white rounded-xl w-full h-full p-4'>
      {/* Title */}
      <div className='flex justify-between'>
        <h1 className='text-lg font-semibold'>Finance</h1>
        <Image src='/moreDark.png' width={20} height={20} alt='more' />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false} tickMargin={10}/>
          <YAxis axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false} tickMargin={20}/>
          <Tooltip />
          <Legend align='center' verticalAlign='top' wrapperStyle={{paddingTop:'10px',paddingBottom:'30px'}}/>
          <Line type="monotone" dataKey="income" stroke="#C2EBFA" strokeWidth={5} />
          <Line type="monotone" dataKey="expense" stroke="#CFCEFF" strokeWidth={5} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default FinanceChart;
