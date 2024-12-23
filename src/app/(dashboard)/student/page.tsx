'use client'
import Announcement from "@/components/Announcement"
import BigCalendar from "@/components/BigCalendar"
import EventCalendar from "@/components/EventCalendar"

const StudentPage = () => {
  return (
    <div className='p-4 flex flex-col gap-4 xl:flex-row'>
      {/* LEFT */}
      <div className="w-full xl:w-2/3 h-full">
        <div className="h-full bg-white rounded-md p-4">
          <h1 className="font-semibold text-xl">Schedule (4A)</h1>
          <BigCalendar/>
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8 ">
       <EventCalendar/>
       <Announcement/>
       </div>
    </div>
  )
}

export default StudentPage