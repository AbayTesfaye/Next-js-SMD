import AttendanceChart from "@/components/AttendanceChart";
import CountChart from "@/components/CountChart";
import EventCalendar from "@/components/EventCalendar";
import FinanceChart from "@/components/FinanceChart";
import UserCard from "@/components/UserCard";

const AdminPage = () => {
  return (
    <div className='p-4 flex flex-col gap-4 md:flex-row'>
      {/* LEFT */}
      <div className="w-full md:w-2/3 flex flex-col gap-8">
        <div className="flex items-center justify-between gap-4 flex-wrap">
         <UserCard type="student"/>
         <UserCard type="teacher"/>
         <UserCard type="parent"/>
         <UserCard type="staff"/>
        </div>
        {/* middle chart */}
        <div className="flex flex-col gap-4 lg:flex-row">
          {/* cout chart */}
          <div className="w-full lg:w-1/3 h-[450px]"><CountChart/></div>
          {/* attendance chart */}
          <div className="w-full lg:w-2/3 h-[450px] "><AttendanceChart/></div>
        </div>
        {/* bottom chart */}
        <div className="w-full h-[500px]"><FinanceChart/></div>
      </div>
       {/* RIGHT */}
       <div className="w-full md:w-1/3">
       <EventCalendar/>
       </div>
    </div>
  )
}

export default AdminPage;