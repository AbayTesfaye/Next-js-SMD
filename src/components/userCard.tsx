import Image from "next/image"

const UserCard = ({type}:{type:string}) => {
  return (
    <div className='odd:bg-schoolPurple even:bg-schoolYellow p-4 flex-1 min-w-[130px] rounded-2xl'>
        <div className="flex justify-between">
            <span className="bg-white text-[10px] text-green-600 px-3 py-1 rounded-full font-semibold">2024/25</span>
            <Image src='/more.png' width={20} height={20} alt="more"/>
        </div>
        <h1 className="font-semibold text-2xl my-4">1,234</h1>
        <h2 className="capitalize text-sm font-bold text-gray-500">{type}</h2>
    </div>
  )
}

export default UserCard