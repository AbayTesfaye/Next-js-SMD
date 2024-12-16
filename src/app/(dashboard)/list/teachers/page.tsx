import Pagination from "@/components/Pagination"
import Table from "@/components/Table"
import TableSearch from "@/components/TableSearch"
import { role, teachersData } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"

const columns = [
    {
        header: "Info", accessor: "info"
    },
    {
        header: "Teacher ID", 
        accessor: "teacherid", 
        className: "hidden md:table-cell"
    },
    {
        header: "Subjects", 
        accessor: "subjects", 
        className: "hidden md:table-cell"
    },
    {
        header: "Classes", 
        accessor: "classes", 
        className: "hidden md:table-cell"
    },
    {
        header: "Phone", 
        accessor: "hone", 
        className: "hidden lg:table-cell"
    },
    {
        header: "Address", 
        accessor: "address", 
        className: "hidden lg:table-cell"
    },
    {
        header: "Actions", 
        accessor: "actions", 
        className: "hidden lg:table-cell"
    },
]
const TeachersPage = () => {
    const renderRow = (item: Teacher) => (
        <tr key={item.id} className="border-b">
          <td className="flex items-center gap-4 py-2">
            <Image
              src={item.photo}
              alt="Teacher photo"
              width={40}
              height={40}
              className="hidden md:block w-10 h-10 rounded-full object-cover"
            />
            <div>
              <h1 className="font-medium text-gray-800">{item.name}</h1>
              <p className="text-sm text-gray-500">{item.email}</p>
            </div>
          </td>
          <td className="hidden md:table-cell">{item.teacherId}</td>
          <td className="hidden md:table-cell">{item.subjects?.join(", ")}</td>
          <td className="hidden md:table-cell">{item.classes?.join(", ")}</td>
          <td className="hidden md:table-cell">{item.phone}</td>
          <td className="hidden md:table-cell">{item.address}</td>
          <td>
            <div className="flex items-center gap-2">
              <Link href={`/list/teachers/${item.id}`}>
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
            <h1 className="hidden md:block text-lg font-semibold">All Teachers</h1>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 w-full md:w-auto">
              <TableSearch/>
              <div className="flex gap-4 self-end items-center ">
                <button className="bg-schoolYellow rounded-full w-8 h-8 flex items-center justify-center cursor-pointer">
                    <Image src='/filter.png' width={14} height={14} alt="message"/>
                </button>
                <button className="bg-schoolYellow rounded-full w-8 h-8 flex items-center justify-center cursor-pointer">
                   <Image src='/sort.png' width={14} height={14} alt="message"/>
                </button>
                <button className="bg-schoolYellow rounded-full w-8 h-8 flex items-center justify-center cursor-pointer">
                   <Image src='/plus.png' width={14} height={14} alt="message"/>
                </button>
              </div>
            </div>
        </div>
        {/* LIST */}
        <Table columns={columns} renderRow={renderRow} data={teachersData}/>
        {/* PAGINATION */}
       <Pagination/>
    </div>
  )
}

export default TeachersPage