import Announcement from "@/components/Announcement"
import BigCalendar from "@/components/BigCalendar"
import Performance from "@/components/Performance"
import Image from "next/image"
import Link from "next/link"


const SingleStudentPage = () => {
  return (
    <div className='flex-1 flex flex-col gap-4 xl:flex-row mx-2'>
         {/* LEFT */}
       <div className="w-full xl:w-2/3">
         {/* top */}
         <div className="flex flex-col lg:flex-row gap-4 ">
            <div className="bg-schoolSky py-6 px-4 rounded-md flex-1 flex gap-4">
                <div className="w-1/3">
                  <Image
                  src='https://images.pexels.com/photos/936126/pexels-photo-936126.jpeg?auto=compress&cs=tinysrgb&w=1200' 
                  width={144} 
                  height={144}
                  alt=""
                  className="w-28 h-28 rounded-full"
                  />
                </div>
                <div className="w-2/3 flex flex-col justify-between gap-4">
                    <h1 className="text-xl font-semibold">Allie Summers</h1>
                    <p className="text-sm text-gray-500">Lorem ipsum, dolor sit amet you have a dream work to achive that.</p>
                    <div className="flex items-center justify-between md:flex-row gap-2 text-xs font-medium flex-wrap">
                        <div className="flex w-full gap-4 md:w-1/3 items-center lg:w-full">
                            <Image alt="" src='/blood.png' width={14} height={14} />
                            <span>A+</span>
                        </div>
                        <div className="flex w-full gap-4 md:w-1/3 items-center lg:w-full">
                            <Image alt="" src='/date.png' width={14} height={14} />
                            <span>January 2025</span>
                        </div>
                        <div className="flex w-full gap-4 md:w-1/3 items-center lg:w-full">
                            <Image alt="" src='/mail.png' width={14} height={14} />
                            <span>summer@gmail.com</span>
                        </div>
                        <div className="flex w-full gap-4 md:w-1/3 items-center lg:w-full">
                            <Image alt="" src='/phone.png' width={14} height={14} />
                            <span>+251 667755</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-1 flex gap-3 justify-between flex-wrap">
                <div className="flex bg-white rounded-md gap-4 w-full px-4 py-2 md:w-[48%] xl:w-[45%] 2x:w-[48%]">
                    <Image src='/singleAttendance.png' alt="" width={24} height={24} className="h-6 w-6"/>
                    <div className="flex flex-col gap-4">
                        <h1 className="text-xl font-semibold">94%</h1>
                        <span className="text-sm text-gray-400">Attendance</span>
                    </div>
                </div>
                <div className="flex bg-white rounded-md gap-4 w-full px-4 py-2 md:w-[48%] xl:w-[45%] 2x:w-[48%]">
                    <Image src='/singleBranch.png' alt="" width={24} height={24} className="h-6 w-6"/>
                    <div className="flex flex-col gap-4">
                      <h1 className="text-xl font-semibold">6th</h1>
                      <span className="text-sm text-gray-400">Grade</span>
                    </div>
                </div>
                <div className="flex bg-white rounded-md gap-4 w-full px-4 py-2 md:w-[48%] xl:w-[45%] 2x:w-[48%]">
                    <Image src='/singleLesson.png' alt="" width={24} height={24} className="h-6 w-6"/>
                    <div className="flex flex-col gap-4">
                       <h1 className="text-xl font-semibold">18</h1>
                       <span className="text-sm text-gray-400">Lessons</span>
                    </div>
                </div>
                <div className="flex bg-white rounded-md gap-4 w-full px-4 py-2 md:w-[48%] xl:w-[45%] 2x:w-[48%]">
                    <Image src='/singleClass.png' alt="" width={24} height={24} className="h-6 w-6"/>
                    <div className="flex flex-col gap-4">
                        <h1 className="text-xl font-semibold">6A</h1>
                        <span className="text-sm text-gray-400">Class Name</span>
                    </div>
                </div>
            </div>
         </div>
         {/* bottom */}
         <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
            <h1>Student's Schedule</h1>
            <BigCalendar/>
         </div>
       </div>
         {/* RIGHT */}
       <div className="w-full xl:w-1/3">
           {/* shortcuts */}
         <div className="flex flex-col gap-4 bg-white rounded-md p-4">
            <h1 className="text-xl font-semibold">Shortcuts</h1>
            <div className="flex flex-wrap gap-4" >
                <div className="text-medium text-gray-400 rounded-md p-2 bg-schoolSkyLight" >
                <Link href='/list/teachers' className="">Students Lessons</Link>
                </div>
                <div className="text-medium text-gray-400 rounded-md p-2 bg-schoolPurpleLight" >
                <Link href='/list/teachers' className="">Students Teachers</Link>
                </div>
                <div className="text-medium text-gray-400 rounded-md p-2 bg-schoolSkyLight" >
                <Link href='' className="">Students Exams</Link>
                </div>
                <div className="text-medium text-gray-400 rounded-md p-2 bg-schoolPurpleLight" >
                <Link href='/list/assignments' className="">Students Assignments</Link>
                </div>
                <div className="text-medium text-gray-400 rounded-md p-2 bg-schoolPurpleLight" >
                <Link href='/list/results' className="">Students Results</Link>
                </div>
           </div>
         </div>
         <div>
        {/* performance */}
         <Performance/>
        {/* Announcements */}
        <Announcement/>
         </div>
         <div></div>
       </div>
    </div>
  )
}

export default SingleStudentPage