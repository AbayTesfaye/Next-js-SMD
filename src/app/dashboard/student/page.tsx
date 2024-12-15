import Announcement from "@/components/Announcement"
import EventCalendar from "@/components/EventCalendar"

const StudentPage = () => {
  return (
    <div className='p-4 flex flex-col gap-4 xl:flex-row'>
      {/* LEFT */}
      <div className="w-full xl:w-2/3">Left</div>
      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8 ">
       <EventCalendar/>
       <Announcement/>
       </div>
    </div>
  )
}

export default StudentPage