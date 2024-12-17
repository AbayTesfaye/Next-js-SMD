import Pagination from "@/components/Pagination"
import Table from "@/components/Table"
import TableSearch from "@/components/TableSearch"
import {eventsData, resultsData,role} from "@/lib/data"
import Image from "next/image"
import Link from "next/link"


type Event = {
  id:number;
  title:string;
  class:string;
  date:string;
  startTime:string;
  endTime:string;
}

const columns = [
    {
        header: "Title", 
        accessor: "title"
    },
    {
        header: "Class", 
        accessor: "class", 
        className: "hidden md:table-cell",
    },
    {
        header: "Date", 
        accessor: "date", 
        className: "hidden md:table-cell"
    },
    {
        header: "Start Time", 
        accessor: "start", 
        className: "hidden md:table-cell",
    },
    {
        header: "End Time", 
        accessor: "end", 
        className: "hidden md:table-cell",
    },
    {
        header: "Actions", 
        accessor: "actions", 
        className: "hidden md:table-cell"
    },
]

const EventListPage = () => {
    const renderRow = (item: Event) => (
        <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 hover:bg-schoolPurpleLight">
          <td className="flex items-center gap-4 p-4">
            <div>
              <h1 className="font-medium text-gray-800">{item.title}</h1>
            </div>
          </td>
          <td className="hidden md:table-cell">{item.class}</td>
          <td className="hidden md:table-cell">{item.date}</td>
          <td className="hidden lg:table-cell">{item.startTime}</td>
          <td className="hidden md:table-cell">{item.endTime}</td>
          <td>
            <div className="flex items-center gap-2">
              <Link href={`/list/students/${item.id}`}>
               <button className="w-7 h-7 flex items-center justify-center rounded-full bg-schoolSky">
                <Image src='/edit.png' alt="" width={16} height={16}/>
               </button>
              </Link>
              {
                role === 'admin' && (
                  <button className="w-7 h-7 flex items-center justify-center rounded-full bg-schoolPurple">
                  <Image src='/delete.png' alt="" width={16} height={16}/>
                 </button>
                )
              }
            </div>
          </td>
        </tr>
      );
  return (
    <div className='bg-white rounded-md p-4 flex-1 m-4 mt-0'>
        {/* TOP */}
        <div className="flex justify-between items-center">
            <h1 className="hidden md:block text-lg font-semibold">All Events</h1>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 w-full md:w-auto">
              <TableSearch/>
              <div className="flex gap-4 self-end items-center ">
                <button className="bg-schoolYellow rounded-full w-8 h-8 flex items-center justify-center cursor-pointer">
                    <Image src='/filter.png' width={14} height={14} alt="message"/>
                </button>
                <button className="bg-schoolYellow rounded-full w-8 h-8 flex items-center justify-center cursor-pointer">
                   <Image src='/sort.png' width={14} height={14} alt="message"/>
                </button>
                {role === 'admin' && <button className="bg-schoolYellow rounded-full w-8 h-8 flex items-center justify-center cursor-pointer">
                   <Image src='/plus.png' width={14} height={14} alt="message"/>
                </button>
                }  
              </div>
            </div>
        </div>
        {/* LIST */}
        <Table columns={columns} renderRow={renderRow} data={eventsData}/>
        {/* PAGINATION */}
       <Pagination/>
    </div>
  )
}

export default EventListPage
