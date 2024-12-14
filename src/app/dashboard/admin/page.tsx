import UserCard from "@/components/userCard";

const AdminPage = () => {
  return (
    <div className='p-4 flex flex-col gap-4 md:flex-row'>
      {/* LEFT */}
      <div className="w-full md:w-2/3">
        <div className="flex items-center justify-between gap-4 flex-wrap">
         <UserCard type="student"/>
         <UserCard type="teacher"/>
         <UserCard type="parent"/>
         <UserCard type="staff"/>
        </div>
      </div>
       {/* RIGHT */}
       <div className="w-full md:w-1/3">RIGHT</div>
    </div>
  )
}

export default AdminPage;