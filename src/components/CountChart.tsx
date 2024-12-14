'use client'
import Image from 'next/image';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Total',
    count: 106,
    fill: 'white',
  },
  {
    name: 'Boys',
    count: 53,
    fill: '#FAE27C',
  },
  {
    name: 'Girls',
    count: 53,
    fill: '#C3EBFA',
  }
]
const CountChart = () => {
  return (
    <div className='bg-white rounded-xl w-full h-full p-4'>
     {/* Title */}
      <div className='flex justify-between'>
        <h1 className='text-lg font-semibold'>Students</h1>
        <Image src='/moreDark.png' width={20} height={20} alt='more'/>
      </div>
     {/* Chart */}
      <div className='relative w-full h-[75%]'>
      <ResponsiveContainer>
        <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={32} data={data}>
          <RadialBar
            background
            dataKey="count"
          />
        </RadialBarChart>
      </ResponsiveContainer>
      <Image src='/maleFemale.png' alt='' width={50} height={50} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'/>
      </div>
     {/* Bottom */}
      <div className='flex items-center justify-center gap-16'>
        <div className='flex flex-col gap-1'>
          <div className='bg-schoolSky rounded-full w-5 h-5'/>
          <h1 className='font-bold'>1,234</h1>
          <h2 className='text-gray-300 text-xs'>Boys(55%)</h2>
        </div>
        <div className='flex flex-col'>
          <div className='bg-schoolYellow rounded-full w-5 h-5'/>
          <h1 className='font-bold'>1,134</h1>
          <p className='text-gray-300 text-xs'>Girls(45%)</p>
        </div>
      </div>
    </div>
  )
}

export default CountChart