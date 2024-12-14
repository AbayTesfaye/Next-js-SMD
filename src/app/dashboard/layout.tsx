import Link from "next/link";
import Image from 'next/image';
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <div className="h-screen flex">
    {/* LEFT */}
    <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4">
    <Link href='/' className="flex items-center justify-center lg:justify-start gap-2">
        <Image src='/logo.png' width={32} height={32} alt='logo'/>  
        <span className="hidden md:block">School</span>
    </Link>
    <Menu/>
</div>

    {/* RIGHT */}
    <div className="w-[86%] md:w-[92%] lg:w-[84%] lx:w-[86%] bg-[#F7F8FA] overflow-scroll">
        <Navbar/>
        {children}
    </div>
   
  </div>
       
  )
}
