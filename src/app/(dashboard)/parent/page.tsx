'use client'
import Announcement from "@/components/Announcement"
import BigCalendar from "@/components/BigCalendar"

const ParentPage = () => {
  return (
    <div className='flex-1 p-4 flex flex-col gap-4 xl:flex-row'>
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        <div className="h-full bg-white rounded-md p-4">
          <h1 className="font-semibold text-xl">Schedule (John Doe)</h1>
          <BigCalendar/>
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8 ">
       <Announcement/>
       </div>
    </div>
  )
}

export default ParentPage;