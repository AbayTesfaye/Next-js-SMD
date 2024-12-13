import Image from "next/image"

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4'>
        {/* SEARCH */}
        <div className="hidden md:flex items-center gap-2 ring-[1.5px] text-xs ring-gray-300 px-2 rounded-full ">
            <Image src='/search.png' width={14} height={14} alt="search"/>
            <input type="text" placeholder="Search..." className="w-[200px] p-2 bg-transparent outline-none" />
        </div>
         {/* ICONS & USER */}
         <div className="flex items-center gap-6 w-full justify-end">
          <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
           <Image src='/message.png' width={20} height={20} alt="message"/>
          </div>
          <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
           <Image src='/announcement.png' width={20} height={20} alt="announcement" className="relative"/>
           <div className="absolute -right-3 -top-3 w-5 h-5 rounded-full bg-purple-600 text-white flex justify-center items-center text-xs">1</div>
          </div>
          <div className="flex flex-col">
            <span className="text-xs leading-3 font-medium">John Doe</span>
            <span className="text-[10px] text-gray-500 text-right">Admin</span>
          </div>
          <Image src='/avatar.png' width={36} height={36} alt="profile" className="rounded-full"/>
         </div>
    </div>
  )
}

export default Navbar