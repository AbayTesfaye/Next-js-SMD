'use client'
import Image from 'next/image';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
    {
        id:1,
        title:"Lorem ipsum dolor",
        time: "12:00 PM - 2:00 PM",
        discription:"Lorem ipsum dolor sit amet consectet"
    },
    {
        id:2,
        title:"Lorem ipsum dolor",
        time: "12:00 PM - 2:00 PM",
        discription:"Lorem ipsum dolor sit amet consectet"
    },
    {
        id:3,
        title:"Lorem ipsum dolor",
        time: "12:00 PM - 2:00 PM",
        discription:"Lorem ipsum dolor sit amet consectet"
    },
]
const EventCalendar = () => {
    const [value, onChange] = useState<Value>(new Date());
  return (
    <div className='bg-white p-4 rounded-md'>
        <Calendar onChange={onChange} value={value} />
        <div className='flex justify-between items-center'>
            <h1 className='text-xl font-semibold my-4'>Events</h1>
            <Image src='/moreDark.png' width={20} height={20} alt='more'/>
        </div>
        <div className='flex flex-col gap-4'>
            {
               events.map((event)=> (
                <div className='flex flex-col p-5 rounded-md border-2 border-gray-200 border-t-4 odd:border-t-schoolSky even:border-t-schoolPurple' key={event.id}>
                    <div className='flex justify-between items-center'>
                        <h1 className='font-semibold text-gray-600'>{event.title}</h1>
                        <span className='text-gray-300 text-xs'>{event.time}</span>
                    </div>
                    <p className='mt-2 text-gray-400 text-sm'>{event.discription}</p>
                </div>
               )) 
            }
        </div>
    </div>
  )
}

export default EventCalendar