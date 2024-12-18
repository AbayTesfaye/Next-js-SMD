import Image from "next/image"


const SingleTeacherPage = () => {
  return (
    <div className='flex-1 flex flex-col gap-4 xl:flex-row'>
         {/* LEFT */}
       <div className="w-full xl:w-2/3">
         {/* top */}
         <div className="flex flex-col lg:flex-row gap-4 ">
            <div className="bg-schoolSky py-6 px-4 rounded-md flex-1 flex gap-4">
                <div className="w-1/3">
                  <Image
                  src='https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200' 
                  width={144} 
                  height={144}
                  alt=""
                  className="w-28 h-28 rounded-full"
                  />
                </div>
                <div className="w-2/3 flex flex-col justify-between gap-4">
                    <h1 className="text-xl font-semibold">Dean Guerrero</h1>
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
                            <span>user@gmail.com</span>
                        </div>
                        <div className="flex w-full gap-4 md:w-1/3 items-center lg:w-full">
                            <Image alt="" src='/phone.png' width={14} height={14} />
                            <span>+251 777777</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-1 bg-schoolPurple">small cards</div>
         </div>
         {/* bottom */}
         <div>schedule</div>
       </div>
         {/* RIGHT */}
       <div className="w-full xl:w-1/3">RIGHT</div>
    </div>
  )
}

export default SingleTeacherPage