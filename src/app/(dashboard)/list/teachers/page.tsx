import TableSearch from "@/components/TableSearch"
import Image from "next/image"

const TeachersPage = () => {
  return (
    <div className='bg-white rounded-md p-4 flex-1 m-4 mt-0'>
        {/* TOP */}
        <div className="flex justify-between items-center">
            <h1>All Teachers</h1>
            <div className="flex justify-between items-center gap-4">
              <TableSearch/>
                <div className="bg-schoolYellow rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
                    <Image src='/plus.png' width={14} height={14} alt="message"/>
                </div>
                <div className="bg-schoolYellow rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
                   <Image src='/plus.png' width={14} height={14} alt="message"/>
                </div>
                <div className="bg-schoolYellow rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
                   <Image src='/plus.png' width={14} height={14} alt="message"/>
                </div>
            </div>
        </div>
        {/* LIST */}
        <div></div>
        {/* PAGINATION */}
        <div></div>
    </div>
  )
}

export default TeachersPage