import Image from "next/image"

const TableSearch = () => {
  return (
      <div className="w-full md:w-auto flex items-center gap-2 ring-[1.5px] text-xs ring-gray-300 px-2 rounded-full ">
        <Image src='/search.png' width={14} height={14} alt="search"/>
        <input type="text" placeholder="Search from table..." className="w-[200px] p-2 bg-transparent outline-none" />
      </div>
  )
}

export default TableSearch