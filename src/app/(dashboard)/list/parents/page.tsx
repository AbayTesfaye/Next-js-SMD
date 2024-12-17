import Pagination from "@/components/Pagination"
import Table from "@/components/Table"
import TableSearch from "@/components/TableSearch"
import { parentsData, role} from "@/lib/data"
import Image from "next/image"
import Link from "next/link"


type Parents = {
  id:number;
  parentId:string;
  name:string;
  studentName:string;
  email?:string;
  phone:string;
  address:string;
}

const columns = [
    {
        header: "Info", 
        accessor: "info"
    },
    {
        header: "Student Name", 
        accessor: "studentName", 
        className: "hidden md:table-cell"
    },
    {
        header: "Phone", 
        accessor: "phone", 
        className: "hidden lg:table-cell" // Ensure this hides on medium and shows on large screens
    },
    {
        header: "Address", 
        accessor: "address", 
        className: "hidden lg:table-cell" // Ensure this hides on medium and shows on large screens
    },
    {
        header: "Actions", 
        accessor: "actions", 
        className: "hidden md:table-cell"
    },
]

const ParentsListPage = () => {
    const renderRow = (item: Parents) => (
        <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 hover:bg-schoolPurpleLight">
          <td className="flex items-center gap-4 p-4">
            <div>
              <h1 className="font-medium text-gray-800">{item.name}</h1>
              <p className="text-sm text-gray-500">{item.email}</p>
            </div>
          </td>
          <td className="hidden md:table-cell">{item.studentName}</td>
          <td className="hidden lg:table-cell">{item?.phone}</td>
          <td className="hidden lg:table-cell">{item.address}</td>
          <td>
            <div className="flex items-center gap-2">
              <Link href={`/list/students/${item.id}`}>
               <button className="w-7 h-7 flex items-center justify-center rounded-full bg-schoolSky">
                <Image src='/view.png' alt="" width={16} height={16}/>
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
            <h1 className="hidden md:block text-lg font-semibold">All Parents</h1>
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
        <Table columns={columns} renderRow={renderRow} data={parentsData}/>
        {/* PAGINATION */}
       <Pagination/>
    </div>
  )
}

export default ParentsListPage
