import FormModal from "@/components/FormModal"
import Pagination from "@/components/Pagination"
import Table from "@/components/Table"
import TableSearch from "@/components/TableSearch"
import { role, studentsData} from "@/lib/data"
import Image from "next/image"
import Link from "next/link"


type Student = {
  id:number;
  studentId:string;
  name:string;
  email?:string;
  photo:string;
  class:string;
  grade:number;
  phone:string;
  address:string;
}

const columns = [
    {
        header: "Info", 
        accessor: "info"
    },
    {
        header: "Student ID", 
        accessor: "studentid", 
        className: "hidden md:table-cell"
    },
    {
        header: "Grade", 
        accessor: "grade", 
        className: "hidden md:table-cell"
    },
    {
        header: "Phone", 
        accessor: "phone", 
        className: "hidden md:table-cell" // Ensure this hides on medium and shows on large screens
    },
    {
        header: "Address", 
        accessor: "address", 
        className: "hidden md:table-cell" // Ensure this hides on medium and shows on large screens
    },
    {
        header: "Actions", 
        accessor: "actions", 
    },
]

const StudentListPage = () => {
    const renderRow = (item: Student) => (
        <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 hover:bg-schoolPurpleLight">
          <td className="flex items-center gap-4 p-4">
            <Image
              src={item.photo}
              alt="Teacher photo"
              width={40}
              height={40}
              className="hidden md:block w-10 h-10 rounded-full object-cover"
            />
            <div>
              <h1 className="font-medium text-gray-800">{item.name}</h1>
              <p className="text-sm text-gray-500">{item.class}</p>
            </div>
          </td>
          <td className="hidden md:table-cell">{item.studentId}</td>
          <td className="hidden md:table-cell">{item.grade}</td>
          <td className="hidden lg:table-cell">{item?.phone}</td>
          <td className="hidden lg:table-cell">{item.address}</td>
          <td>
            <div className="flex items-center gap-2">
              {
                role === 'admin' && (
                  <>
                  <FormModal table="student" type="update" data={item}/>
                  <FormModal table="student" type="delete" id={item.id}/>
                 </> 
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
            <h1 className="hidden md:block text-lg font-semibold">All Students</h1>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 w-full md:w-auto">
              <TableSearch/>
              <div className="flex gap-4 self-end items-center ">
                <button className="bg-schoolYellow rounded-full w-8 h-8 flex items-center justify-center cursor-pointer">
                    <Image src='/filter.png' width={14} height={14} alt="message"/>
                </button>
                <button className="bg-schoolYellow rounded-full w-8 h-8 flex items-center justify-center cursor-pointer">
                   <Image src='/sort.png' width={14} height={14} alt="message"/>
                </button>
                {role === 'admin' &&  (
                // <button className="bg-schoolYellow rounded-full w-8 h-8 flex items-center justify-center cursor-pointer">
                //    <Image src='/plus.png' width={14} height={14} alt="message"/>
                // </button>
                <FormModal table="student" type="create"/>
                )}  
              </div>
            </div>
        </div>
        {/* LIST */}
        <Table columns={columns} renderRow={renderRow} data={studentsData}/>
        {/* PAGINATION */}
       <Pagination/>
    </div>
  )
}

export default StudentListPage
